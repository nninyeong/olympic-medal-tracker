import { useState, useEffect } from "react";
import { formValidation } from "../util.js";

import SortOptionDropdown from "./SortOptionDropdown";
import RankingTable from "./RankingTable";
import MedalForm from "./MedalForm";
import InputGuidance from "./InputGuidance";

const INITIAL_INPUT_VALUE = {
  country: "",
  gold: "0",
  silver: "0",
  bronze: "0",
  total: "0",
};

function MedalSection() {
  const [medalData, setMedalData] = useState([]);
  const [medalDataInput, setMedalDataInput] = useState(INITIAL_INPUT_VALUE);

  const initializeInput = () => {
    setMedalDataInput(INITIAL_INPUT_VALUE);
  };

  const [sortOption, setSortOption] = useState("금은동 우선순위");
  const [showSortOptionMenu, setShowSortOptionMenu] = useState(false);

  const selectOption = (event) => {
    setSortOption(event.currentTarget.innerText);
    setShowSortOptionMenu(false);
  };

  const [initialLoad, setInitialLoad] = useState(true);

  const inputHandler = (event) => {
    const { value, id } = event.currentTarget;
    let input = { ...medalDataInput };
    input[id] = value;
    setMedalDataInput(input);
  };

  const sortData = (data) => {
    let sortedData = [...data];
    if (sortOption === "금은동 우선순위") {
      sortedData.sort((a, b) => {
        if (+a.gold !== +b.gold) return b.gold - a.gold;
        else if (+a.silver !== +b.silver) return b.silver - a.silver;
        else return b.bronze - a.bronze;
      });
    } else if (sortOption === "총 메달수") {
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

      if (!updateCountryData) {
        alert("등록되지 않은 국가입니다.");
        return;
      }

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
    <>
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
        showSortOptionMenu={showSortOptionMenu}
        setShowSortOptionMenu={setShowSortOptionMenu}
        selectOption={selectOption}
      />
      {medalData.length === 0 ? (
        <InputGuidance />
      ) : (
        <RankingTable medalData={medalData} deleteHandler={deleteHandler} />
      )}
    </>
  );
}

export default MedalSection;
