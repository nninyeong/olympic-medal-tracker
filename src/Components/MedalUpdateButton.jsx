function MedalUpdateButton({ children, updateButtonHandler }) {
  return (
    <button
      type={children === "업데이트" ? "button" : "submit"}
      name={children}
      onClick={updateButtonHandler}
    >
      {children}
    </button>
  );
}

export default MedalUpdateButton;
