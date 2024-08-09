import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1 id="title">2024 파리 올림픽</h1>
      <section id="userInput">
        <MedalInputField type={"country"}>국가명</MedalInputField>
        <MedalInputField type={"gold"}>금메달 수</MedalInputField>
        <MedalInputField type={"silver"}>은메달 수</MedalInputField>
        <MedalInputField type={"bronze"}>동메달 수</MedalInputField>
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

function MedalInputField({ type, children }) {
  const medalInputFieldStyle = {
    width: "100px",
    height: "40px",
  };

  const inputFieldStyle = {
    width: "90%",
    height: "20px",
  };

  return (
    <div style={medalInputFieldStyle}>
      <h3>{children}</h3>
      <input type="text" id={type} style={inputFieldStyle}></input>
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
