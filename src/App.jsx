import { useState } from "react";
import "./App.css";

const App = () => {
  const [medalData, setMedalData] = useState([]);
  const [medalDataInput, setMedalDataInput] = useState({});

  return (
    <main>
      <h1 id="title">2024 파리 올림픽</h1>
      <section id="userInput">
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
      </section>
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
              <MedalTableRow key={data.country} data={data}></MedalTableRow>
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

  const updateButtonHandler = () => {
    const udpatedMedalData = [...medalData, medalDataInput];
    setMedalDataInput({});
    console.log(udpatedMedalData);
    setMedalData(udpatedMedalData);
  };

  return (
    <button style={medalUpdateButtonStyle} onClick={updateButtonHandler}>
      {children}
    </button>
  );
}

function MedalTableRow({ data }) {
  return (
    <tr>
      <td>{data.country}</td>
      <td>{data.gold}</td>
      <td>{data.silver}</td>
      <td>{data.bronze}</td>
      <td>
        <button></button>
      </td>
    </tr>
  );
}

export default App;
