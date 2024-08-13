import MedalTableRow from "./MedalTableRow";
import { sortData } from "../util";
import "../css/medalTable.css";

function RankingTable({ medalData, sortOption, deleteHandler }) {
  const sortedData = sortData(medalData, sortOption);
  return (
    <div id="rankingTable">
      <table id="ranking">
        <thead>
          <tr>
            <th scope="col">국가명</th>
            <th scope="col">금메달</th>
            <th scope="col">은메달</th>
            <th scope="col">동메달</th>
            <th scope="col">총 메달수</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data) => {
            return (
              <MedalTableRow
                key={data.country}
                data={data}
                deleteHandler={deleteHandler}
              ></MedalTableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RankingTable;
