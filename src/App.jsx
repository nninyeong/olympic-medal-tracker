import { useState } from "react";
import "./App.css";

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
        >
          국가 추가
        </MedalUpdateButton>
        <MedalUpdateButton
          medalData={medalData}
          medalDataInput={medalDataInput}
          setMedalData={setMedalData}
          setMedalDataInput={setMedalDataInput}
        >
          업데이트
        </MedalUpdateButton>
      </form>
      <ul
        id="sortingOptions"
        onClick={() => setShowSortOptionMenu(!showSortOptionMenu)}
      >
        {sortOption}
        {showSortOptionMenu && (
          <SortOptionMenu
            setSortOption={setSortOption}
            setShowSortOptionMenu={setShowSortOptionMenu}
          />
        )}
      </ul>
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

function MedalInputField({
  dataType,
  children,
  medalDataInput,
  setMedalDataInput,
}) {
  const defaultValue = dataType === "country" ? "" : "0";

  const inputHandler = (event) => {
    let input = { ...medalDataInput };
    input[`${dataType}`] =
      dataType === "country"
        ? event.currentTarget.value
        : +event.currentTarget.value;
    setMedalDataInput(input);
  };

  return (
    <div className="medalInputField">
      <h3>{children}</h3>
      <input
        type={dataType === "country" ? "text" : "number"}
        id={dataType}
        onChange={inputHandler}
        value={medalDataInput[`${dataType}`] || defaultValue}
        placeholder={dataType === "country" ? "국가 입력" : ""}
      ></input>
    </div>
  );
}

function MedalUpdateButton({
  children,
  medalData,
  medalDataInput,
  setMedalData,
  setMedalDataInput,
}) {
  const sortData = (data) => {
    return data.sort((a, b) => {
      if (+a.gold !== +b.gold) return b.gold - a.gold;
      else if (+a.silver !== +b.silver) return b.silver - a.silver;
      else return b.bronze - a.bronze;
    });
  };

  const countTotalMedal = (data) => {
    data.total = 0;
    data.total += data.gold + data.silver + data.bronze;
  };

  const updateButtonHandler = () => {
    if (!medalDataInput.country) {
      alert("국가명을 입력해주세요.");
      return;
    }

    let updatedMedalData = [];
    if (children === "업데이트") {
      const updateCountryData = medalData.find(
        (data) => data.country === medalDataInput.country
      );

      for (let key in medalDataInput) {
        updateCountryData[key] = medalDataInput[key];
      }

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

      countTotalMedal(medalDataInput);
      updatedMedalData = [...medalData, medalDataInput];
    }

    setMedalDataInput({ country: "", gold: 0, silver: 0, bronze: 0, total: 0 });

    updatedMedalData = sortData(updatedMedalData);
    setMedalData(updatedMedalData);
  };

  return (
    <button
      type={children === "업데이트" ? "button" : "submit"}
      onClick={updateButtonHandler}
    >
      {children}
    </button>
  );
}

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

function SortOptionMenu({ setSortOption, setShowSortOptionMenu }) {
  const selectOption = (event) => {
    setSortOption(event.currentTarget.innerText);
    setShowSortOptionMenu(false);
  };
  return (
    <>
      <li onClick={selectOption}>금은동 우선순위 순</li>
      <li onClick={selectOption}>총 메달수 순</li>
    </>
  );
}

export default App;
