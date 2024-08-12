import { useState } from "react";
import MedalInputField from "./MedalInputField.jsx";
import MedalUpdateButton from "./MedalUpdateButton.jsx";
import "../css/form.css";

function Form({ medalData, setMedalData, sortData }) {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [medalDataInput, setMedalDataInput] = useState({
    country: "",
    gold: "0",
    silver: "0",
    bronze: "0",
    total: "0",
  });

  return (
    <form id="userInput" onSubmit={submitHandler}>
      {Object.keys(medalDataInput).map((key) => {
        if (key === "total") return;

        return (
          <MedalInputField
            key={key}
            dataType={key}
            medalDataInput={medalDataInput}
            setMedalDataInput={setMedalDataInput}
          />
        );
      })}
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
  );
}

export default Form;
