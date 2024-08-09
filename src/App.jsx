import { useState } from "react";
import "./App.css";

const App = () => {
  const [medalData, setMedalData] = useState([]);
  const [newMedalData, setNewMedalData] = useState({});

  return (
    <main>
      <h1 id="title">2024 파리 올림픽</h1>
      <section id="userInput">
        <MedalInputField
          dataType={"country"}
          newMedalData={newMedalData}
          setNewMedalData={setNewMedalData}
        >
          국가명
        </MedalInputField>
        <MedalInputField
          dataType={"gold"}
          newMedalData={newMedalData}
          setNewMedalData={setNewMedalData}
        >
          금메달 수
        </MedalInputField>
        <MedalInputField
          dataType={"silver"}
          newMedalData={newMedalData}
          setNewMedalData={setNewMedalData}
        >
          은메달 수
        </MedalInputField>
        <MedalInputField
          dataType={"bronze"}
          newMedalData={newMedalData}
          setNewMedalData={setNewMedalData}
        >
          동메달 수
        </MedalInputField>
        <MedalUpdateButton>국가 추가</MedalUpdateButton>
        <MedalUpdateButton>업데이트</MedalUpdateButton>
      </section>
      <section id="ranking">
        <div className="ranking" id="rankingHeader"></div>
        <div className="ranking rankingItem"></div>
      </section>
    </main>
  );
};

function MedalInputField({
  dataType,
  children,
  newMedalData,
  setNewMedalData,
}) {
  const medalInputFieldStyle = {
    width: "100px",
    height: "40px",
  };

  const inputFieldStyle = {
    width: "90%",
    height: "20px",
  };

  const inputHandler = (event) => {
    let medalDataInput = newMedalData;
    medalDataInput[`${dataType}`] = event.currentTarget.value;
    setNewMedalData(medalDataInput);
    console.log(newMedalData);
  };

  return (
    <div style={medalInputFieldStyle}>
      <h3>{children}</h3>
      <input
        type={dataType === "country" ? "text" : "number"}
        id={dataType}
        style={inputFieldStyle}
        onChange={inputHandler}
        value={newMedalData[`${dataType}`]}
      ></input>
    </div>
  );
}

function MedalUpdateButton({ children }) {
  const medalUpdateButtonStyle = {
    width: "10%",
    height: "20px",
    whiteSpace: "nowrap",
  };

  return <button style={medalUpdateButtonStyle}>{children}</button>;
}

export default App;
