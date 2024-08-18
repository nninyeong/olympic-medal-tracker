function MedalTableRow({
  data: { country, gold, silver, bronze, total },
  deleteHandler,
}) {
  return (
    <tr>
      {/* onFocus={(e) => e.target.value === "0" && setBronze("")}
      onBlur={(e) => e.target.value === "" && setBronze(0)} */}
      <td>{country}</td>
      <td>{+gold}</td>
      <td>{+silver}</td>
      <td>{+bronze}</td>
      <td>{+total}</td>
      <td>
        <button
          type="button"
          className="deleteRowButton"
          onClick={() => deleteHandler(country)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}

export default MedalTableRow;
