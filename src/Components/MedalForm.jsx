import MedalInputField from "./MedalInputField.jsx";
import AddButton from "./AddButton.jsx";
import UpdateButton from "./UpdateButton.jsx";
import "../css/form.css";

function MedalForm({
  medalDataInput,
  addButtonHandler,
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
            inputHandler={inputHandler}
          />
        );
      })}

      <AddButton addButtonHandler={addButtonHandler} />
      <UpdateButton updateButtonHandler={updateButtonHandler} />
    </form>
  );
}

export default MedalForm;
