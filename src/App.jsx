import { useState, useEffect } from "react";
import "./css/App.css";
import SortOptionDropdown from "./Components/SortOptionDropdown.jsx";
import RankingTable from "./Components/RankingTable.jsx";
import Form from "./Components/Form.jsx";
import InputGuidance from "./Components/InputGuidance.jsx";

const App = () => {
  const [medalData, setMedalData] = useState([]);

  const [sortOption, setSortOption] = useState("금은동 우선순위 순");

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

  return (
    <main>
      <h1 id="title">2024 파리 올림픽</h1>
      <Form
        id="userInput"
        medalData={medalData}
        setMedalData={setMedalData}
        sortData={sortData}
      />
      <SortOptionDropdown
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      {medalData.length === 0 ? (
        <InputGuidance />
      ) : (
        <RankingTable medalData={medalData} setMedalData={setMedalData} />
      )}
    </main>
  );
};

export default App;
