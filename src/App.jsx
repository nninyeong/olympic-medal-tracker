import { useState, useEffect } from "react";
import "./css/App.css";
import SortOptionDropdown from "./Components/SortOptionDropdown.jsx";
import RankingTable from "./Components/RankingTable.jsx";
import MedalForm from "./Components/Form.jsx";
import InputGuidance from "./Components/InputGuidance.jsx";
import { formValidation } from "./util.js";

const App = () => {
  const [medalData, setMedalData] = useState([]);
  const [medalDataInput, setMedalDataInput] = useState({
    country: "",
    gold: "0",
    silver: "0",
    bronze: "0",
    total: "0",
  });

  const initializeInput = () => {
    setMedalDataInput({
      country: "",
      gold: "0",
      silver: "0",
      bronze: "0",
      total: "0",
    });
  };

  const [sortOption, setSortOption] = useState("금은동 우선순위 순");

  const [initialLoad, setInitialLoad] = useState(true);

  const inputHandler = (event) => {
    const { value, id } = event.currentTarget;
    let input = { ...medalDataInput };
    input[id] = value;
    setMedalDataInput(input);
  };

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

  const countTotalMedal = (data) => {
    data.total = 0;
    data.total += data.gold + data.silver + data.bronze;
  };

  const convertValuesToNumber = (data) => {
    data.gold = +data.gold;
    data.silver = +data.silver;
    data.bronze = +data.bronze;
  };

  const updateButtonHandler = (event) => {
    const name = event.currentTarget.name;

    const { isValid, message } = formValidation(medalDataInput);
    if (!isValid) {
      alert(message);
      return;
    }

    let updatedMedalData = [];
    if (name === "업데이트") {
      const updateCountryData = medalData.find(
        (data) => data.country === medalDataInput.country
      );

      for (let key in medalDataInput) {
        updateCountryData[key] = medalDataInput[key];
      }

      convertValuesToNumber(updateCountryData);
      countTotalMedal(updateCountryData);
      updatedMedalData = [...medalData];
    } else {
      let isDuplicate = medalData.some(
        (data) => data.country === medalDataInput.country
      );
      if (isDuplicate) {
        alert("이미 등록된 국가입니다.");
        return;
      }

      convertValuesToNumber(medalDataInput);
      countTotalMedal(medalDataInput);
      updatedMedalData = [...medalData, medalDataInput];
    }

    initializeInput();

    updatedMedalData = sortData(updatedMedalData);
    setMedalData(updatedMedalData);
  };

  const deleteHandler = (selectedCountry) => {
    let filteredData = medalData.filter(
      (data) => data.country !== selectedCountry
    );
    setMedalData(filteredData);
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
      <MedalForm
        id="userInput"
        medalData={medalData}
        setMedalData={setMedalData}
        medalDataInput={medalDataInput}
        setMedalDataInput={setMedalDataInput}
        updateButtonHandler={updateButtonHandler}
        inputHandler={inputHandler}
      />
      <SortOptionDropdown
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      {medalData.length === 0 ? (
        <InputGuidance />
      ) : (
        <RankingTable medalData={medalData} deleteHandler={deleteHandler} />
      )}
    </main>
  );
};

export default App;
