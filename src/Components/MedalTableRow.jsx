function MedalTableRow({
  data: { country, gold, silver, bronze, total },
  medalData,
  setMedalData,
}) {
  const deleteRow = () => {
    let filteredData = medalData.filter((data) => data.country !== country);
    setMedalData(filteredData);
  };

  return (
    <tr>
      <td>{country}</td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
      <td>{total}</td>
      <td>
        <button type="button" className="deleteRowButton" onClick={deleteRow}>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default MedalTableRow;
