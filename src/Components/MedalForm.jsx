import MedalInputField from "./MedalInputField.jsx";
import MedalUpdateButton from "./MedalUpdateButton.jsx";
import "../css/form.css";

const UPDATE_BUTTONS = [
  {
    type: "submit",
    name: "국가 추가",
  },
  {
    type: "button",
    name: "업데이트",
  },
];

function MedalForm({ medalDataInput, updateButtonHandler, inputHandler }) {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <form id="userInput" onSubmit={preventDefault}>
      {Object.keys(medalDataInput).map((key) => {
        if (key === "total") return;

        return (
          <MedalInputField
            key={key}
            dataType={key}
            medalDataInput={medalDataInput}
            inputHandler={inputHandler}
          />
        );
      })}

      {UPDATE_BUTTONS.map((button) => {
        return (
          <MedalUpdateButton
            key={button.name}
            name={button.name}
            type={button.type}
            updateButtonHandler={updateButtonHandler}
          />
        );
      })}
    </form>
  );
}

export default MedalForm;
