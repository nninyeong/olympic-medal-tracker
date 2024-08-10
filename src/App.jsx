import { useState } from "react";
import "./App.css";

const App = () => {
  const [medalData, setMedalData] = useState([]);
  const [medalDataInput, setMedalDataInput] = useState({});

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
      <table>
        <thead>
          <tr>
            <th scope="col">국가명</th>
            <th scope="col">금메달</th>
            <th scope="col">은메달</th>
            <th scope="col">동메달</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {medalData.map((data) => {
            return (
              <MedalTableRow key={data.country} data={data} medalData={medalData} setMedalData={setMedalData}></MedalTableRow>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

function MedalInputField({
  dataType,
  children,
  medalDataInput,
  setMedalDataInput,
}) {
  const medalInputFieldStyle = {
    width: "100px",
    height: "40px",
  };

  const inputFieldStyle = {
    width: "90%",
    height: "20px",
  };

  const defaultValue = dataType === "country" ? "" : 0;

  const inputHandler = (event) => {
    let input = { ...medalDataInput };
    input[`${dataType}`] = event.currentTarget.value;
    setMedalDataInput(input);
  };

  return (
    <div style={medalInputFieldStyle}>
      <h3>{children}</h3>
      <input
        type={dataType === "country" ? "text" : "number"}
        id={dataType}
        style={inputFieldStyle}
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
  const medalUpdateButtonStyle = {
    width: "10%",
    height: "20px",
    whiteSpace: "nowrap",
  };

  const sortData = (data) => {
    return data.sort((a, b) => {
      if(+a.gold !== +b.gold) return b.gold - a.gold;
      else if(+a.silver !== +b.silver) return b.silver - a.silver;
      else return b.bronze - a.bronze;
    });
  }

  const updateButtonHandler = () => {
    let updatedMedalData = [];
    if (children === "업데이트") {
      const updateCountryData = medalData.find(
        (data) => data.country === medalDataInput.country
      );

      for (let key in medalDataInput) {
        updateCountryData[key] = medalDataInput[key];
      }

      updatedMedalData = [...medalData];
    } else {
      updatedMedalData = [...medalData, medalDataInput];
    }

    setMedalDataInput({});

    updatedMedalData = sortData(updatedMedalData);
    setMedalData(updatedMedalData);
  };

  return (
    <input
      type={children === "업데이트" ? "button" : "submit"}
      style={medalUpdateButtonStyle}
      onClick={updateButtonHandler}
      value={children}
    ></input>
  );
}

function MedalTableRow({ data: { country, gold, silver, bronze }, medalData, setMedalData }) {
  const deleteRow = () => {
    let filteredData = medalData.filter(data => data.country !== country);
    setMedalData(filteredData);
  }

  return (
    <tr>
      <td>{country}</td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
      <td>
        <button type="button" className="deleteRowButton" onClick={deleteRow}>삭제</button>
      </td>
    </tr>
  );
}

export default App;
