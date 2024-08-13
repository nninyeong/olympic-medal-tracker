function MedalTableRow({
  data: { country, gold, silver, bronze, total },
  deleteHandler,
}) {
  return (
    <tr>
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
