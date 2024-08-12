import { useState } from "react";
import MedalInputField from "./MedalInputField.jsx";
import MedalUpdateButton from "./MedalUpdateButton.jsx";

function Form({ medalData, setMedalData, sortData }) {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [medalDataInput, setMedalDataInput] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
    total: 0,
  });

  return (
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
  );
}

export default Form;
