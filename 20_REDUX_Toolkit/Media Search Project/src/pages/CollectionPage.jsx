import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.item);

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6 sm:px-8">
      <section className="window">
        <div className="titlebar">
          <span>Collection.exe</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="tb-btn" />
            <span className="tb-btn" />
          </span>
        </div>

        {collection.length > 0 ? (
          <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
            <h2 className="font-display text-3xl sm:text-4xl">
              Your Collection{" "}
              <span className="text-2xl sm:text-3xl">({collection.length})</span>
            </h2>
            <button
              onClick={() => {
                clearAll();
              }}
              className="retro-btn retro-btn-danger px-6 py-2 text-base sm:text-lg"
            >
              Clear Collection
            </button>
          </div>
        ) : (
          <div className="p-8 text-center sm:p-12">
            <h2 className="font-display text-4xl sm:text-5xl">
              Collection is Empty
            </h2>
            <p className="mx-auto mt-3 max-w-[60ch] text-sm sm:text-base">
              Save photos and videos from your search results and they will
              show up here.
            </p>
            <Link to="/" className="retro-btn mt-6 px-5 py-2 font-medium">
              Go to Search
            </Link>
          </div>
        )}
      </section>

      <div className="grid w-full grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
