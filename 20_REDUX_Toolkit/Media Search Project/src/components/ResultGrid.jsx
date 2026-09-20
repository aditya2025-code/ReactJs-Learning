import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab === "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );
  if (error)
    return (
      <div className="window" role="alert">
        <div className="titlebar">
          <span>Error</span>
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="font-display text-4xl">Error</h1>
          <p className="mt-2 break-words text-sm sm:text-base">
            Something went wrong while loading results. Check your connection
            or try a different search.
          </p>
        </div>
      </div>
    );
  if (loading)
    return (
      <div className="window" role="status">
        <div className="titlebar">
          <span>Please wait</span>
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="font-display text-4xl">Loading...</h1>
          <div className="bevel-in mt-4 h-6 bg-white p-[2px]">
            <div className="progress-bar" />
          </div>
        </div>
      </div>
    );
  return (
    <section className="window">
      <div className="titlebar">
        <span className="truncate">Results ({results.length})</span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="tb-btn" />
          <span className="tb-btn" />
        </span>
      </div>

      {results.length === 0 && (
        <p className="p-6 text-center text-sm sm:p-10 sm:text-base">
          No results found. Try another keyword.
        </p>
      )}

      <div className="grid w-full grid-cols-1 gap-4 p-3 min-[480px]:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((item, idx) => {
          return (
            <div key={idx}>
              <ResultCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResultGrid;
