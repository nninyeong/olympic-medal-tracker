import MedalTableRow from "./MedalTableRow";

function RankingTable({ medalData, setMedalData }) {
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
          {medalData.map((data) => {
            return (
              <MedalTableRow
                key={data.country}
                data={data}
                medalData={medalData}
                setMedalData={setMedalData}
              ></MedalTableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RankingTable;
