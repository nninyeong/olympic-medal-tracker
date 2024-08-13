import { useState } from "react";
import SortOptionMenu from "./SortOptionMenu.jsx";
import "../css/sortOptionDropdown.css";

function SortOptionDropdown({
  sortOption,
  showSortOptionMenu,
  setShowSortOptionMenu,
  selectOption,
}) {
  return (
    <div id="sortOptionDropdown">
      <ul onClick={() => setShowSortOptionMenu(!showSortOptionMenu)}>
        <div>
          {sortOption}
          {showSortOptionMenu ? "  -" : "  ▾"}
        </div>
        {showSortOptionMenu && <SortOptionMenu selectOption={selectOption} />}
      </ul>
    </div>
  );
}

export default SortOptionDropdown;
