function SortOptionMenu({ setSortOption, setShowSortOptionMenu }) {
  const selectOption = (event) => {
    setSortOption(event.currentTarget.innerText);
    setShowSortOptionMenu(false);
  };

  return (
    <>
      <li>
        <div onClick={selectOption}>금은동 우선순위 순</div>
      </li>
      <li>
        <div onClick={selectOption}>총 메달수 순</div>
      </li>
    </>
  );
}

export default SortOptionMenu;
