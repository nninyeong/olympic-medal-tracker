import { useState, useEffect } from "react";
import "./App.css";
import MedalInputField from "./Components/MedalInputField.jsx";
import MedalUpdateButton from "./Components/MedalUpdateButton.jsx";
import SortOptionMenu from "./Components/SortOptionMenu.jsx";
import MedalTableRow from "./Components/MedalTableRow.jsx";

const App = () => {
  const [medalData, setMedalData] = useState([]);
  const [medalDataInput, setMedalDataInput] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
    total: 0,
  });

  const [sortOption, setSortOption] = useState("금은동 우선순위 순");
  const [showSortOptionMenu, setShowSortOptionMenu] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  const sortData = (data) => {
    let sortedData = [...data];
    if (sortOption === "금은동 우선순위 순") {
      sortedData.sort((a, b) => {
        if (+a.gold !== +b.gold) return b.gold - a.gold;
        else if (+a.silver !== +b.silver) return b.silver - a.silver;
        else return b.bronze - a.bronze;
      });
    } else if (sortOption === "총 메달수 순") {
      sortedData.sort((a, b) => {
        return b.total - a.total;
      });
    }

    return sortedData;
  };

  useEffect(() => {
    let sortedData = sortData(medalData);
    setMedalData(sortedData);
  }, [sortOption]);

  useEffect(() => {
    if (initialLoad) return;
    localStorage.setItem("medalData", JSON.stringify(medalData));
  }, [medalData]);

  useEffect(() => {
    if (initialLoad && localStorage.getItem("medalData")) {
      let savedData = JSON.parse(localStorage.getItem("medalData"));
      setMedalData(savedData);
      setInitialLoad(false);
    }
  });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <h1 id="title">2024 파리 올림픽</h1>
      <form id="userInput" onSubmit={submitHandler}>
        <MedalInputField
          dataType={"country"}
          medalDataInput={medalDataInput}
          setMedalDataInput={setMedalDataInput}
        >
          국가명
        </MedalInputField>
        <MedalInputField
          dataType={"gold"}
          medalDataInput={medalDataInput}
          setMedalDataInput={setMedalDataInput}
        >
          금메달 수
        </MedalInputField>
        <MedalInputField
          dataType={"silver"}
          medalDataInput={medalDataInput}
          setMedalDataInput={setMedalDataInput}
        >
          은메달 수
        </MedalInputField>
        <MedalInputField
          dataType={"bronze"}
          medalDataInput={medalDataInput}
          setMedalDataInput={setMedalDataInput}
        >
          동메달 수
        </MedalInputField>
        <MedalUpdateButton
          medalData={medalData}
          medalDataInput={medalDataInput}
          setMedalData={setMedalData}
          setMedalDataInput={setMedalDataInput}
          sortData={sortData}
        >
          국가 추가
        </MedalUpdateButton>
        <MedalUpdateButton
          medalData={medalData}
          medalDataInput={medalDataInput}
          setMedalData={setMedalData}
          setMedalDataInput={setMedalDataInput}
          sortData={sortData}
        >
          업데이트
        </MedalUpdateButton>
      </form>
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
      <div id="rankingContainer">
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
    </main>
  );
};

export default App;
