import MedalInputField from "./MedalInputField.jsx";
import MedalUpdateButton from "./MedalUpdateButton.jsx";
import "../css/form.css";

function MedalForm({
  medalData,
  setMedalData,
  medalDataInput,
  setMedalDataInput,
  updateButtonHandler,
  inputHandler,
}) {
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
            setMedalDataInput={setMedalDataInput}
            inputHandler={inputHandler}
          />
        );
      })}
      <MedalUpdateButton
        medalData={medalData}
        medalDataInput={medalDataInput}
        setMedalData={setMedalData}
        updateButtonHandler={updateButtonHandler}
      >
        국가 추가
      </MedalUpdateButton>
      <MedalUpdateButton
        medalData={medalData}
        medalDataInput={medalDataInput}
        setMedalData={setMedalData}
        updateButtonHandler={updateButtonHandler}
      >
        업데이트
      </MedalUpdateButton>
    </form>
  );
}

export default MedalForm;
