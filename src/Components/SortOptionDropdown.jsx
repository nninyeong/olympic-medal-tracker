import { useState } from "react";
import SortOptionMenu from "./SortOptionMenu.jsx";
import "../css/sortOptionDropdown.css";

function SortOptionDropdown({ sortOption, setSortOption }) {
  const [showSortOptionMenu, setShowSortOptionMenu] = useState(false);

  return (
    <div id="sortOptionDropdown">
      <ul onClick={() => setShowSortOptionMenu(!showSortOptionMenu)}>
        <div>
          {sortOption}
          {showSortOptionMenu ? "  -" : "  ▾"}
        </div>
        {showSortOptionMenu && (
          <SortOptionMenu
            sortOption={sortOption}
            setSortOption={setSortOption}
            setShowSortOptionMenu={setShowSortOptionMenu}
          />
        )}
      </ul>
    </div>
  );
}

export default SortOptionDropdown;
