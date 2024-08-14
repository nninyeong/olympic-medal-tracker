import MedalInputField from "./MedalInputField.jsx";
import AddButton from "./AddButton.jsx";
import UpdateButton from "./UpdateButton.jsx";
import { FORM_LIST } from "../constant.js";
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
      {FORM_LIST.map((form) => {
        return (
          <MedalInputField
            key={form.dataType}
            dataType={form.dataType}
            type={form.type}
            label={form.label}
            inputHandler={inputHandler}
            medalDataInput={medalDataInput}
          />
        );
      })}

      <AddButton addButtonHandler={addButtonHandler} />
      <UpdateButton updateButtonHandler={updateButtonHandler} />
    </form>
  );
}

export default MedalForm;
