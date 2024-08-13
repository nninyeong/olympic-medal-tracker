function MedalUpdateButton({ type, name, updateButtonHandler }) {
  return (
    <button type={type} name={name} onClick={updateButtonHandler}>
      {name}
    </button>
  );
}

export default MedalUpdateButton;
