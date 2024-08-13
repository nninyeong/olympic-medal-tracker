function SortOptionMenu({ selectOption = { selectOption } }) {
  return (
    <>
      <li>
        <div onClick={selectOption}>금은동 우선순위</div>
      </li>
      <li>
        <div onClick={selectOption}>총 메달수</div>
      </li>
    </>
  );
}

export default SortOptionMenu;
