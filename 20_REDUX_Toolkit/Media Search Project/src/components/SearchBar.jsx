import { useState } from "react";
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

   const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
    
  };

  return (
    <section className="window">
      <div className="titlebar">
        <span>Search.exe</span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="tb-btn" />
          <span className="tb-btn" />
        </span>
      </div>

      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col gap-3 p-4 sm:flex-row sm:gap-4 sm:p-6"
      >
        <label htmlFor="search-input" className="sr-only">
          Search photos and videos
        </label>
        <input
          id="search-input"
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
          className="retro-input min-w-0 flex-1 px-3 py-2 text-base sm:text-xl"
          type="text"
          placeholder="Search Anything"
          required
        />
        <button className="retro-btn px-6 py-2 text-lg font-semibold sm:text-xl">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
