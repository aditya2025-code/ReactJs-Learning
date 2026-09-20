import { useSelector } from 'react-redux'
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";


const HomePage = () => {
    const { query } = useSelector((store) => store.search)
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6 sm:px-8">
      
      <SearchBar />
      {query != '' ? (
        <div className="space-y-6">
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        <section className="window">
          <div className="titlebar">
            <span>Readme.txt</span>
          </div>
          <div className="p-6 text-center sm:p-10">
            <h2 className="font-display text-4xl sm:text-5xl">
              Find photos and videos
            </h2>
            <p className="mx-auto mt-3 max-w-[60ch] text-sm sm:text-base">
              Type a keyword above and press Search. Save what you like and
              open it later from your Collection.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
