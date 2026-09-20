// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div
      role="tablist"
      className="flex items-end gap-1 border-b-4 border-ink px-1"
    >
      {tabs.map(function (elem, idx) {
        return (
          <button
            role="tab"
            aria-selected={activeTab == elem}
            className="tab text-sm sm:text-base"
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
