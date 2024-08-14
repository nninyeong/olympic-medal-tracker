function MedalInputField({
  dataType,
  type,
  label,
  medalDataInput,
  inputHandler,
}) {
  return (
    <div className="medalInputField">
      <h3>{label}</h3>
      <input
        type={type}
        id={dataType}
        onChange={inputHandler}
        value={medalDataInput[dataType]}
        placeholder={dataType === "country" ? "국가 입력" : ""}
      ></input>
    </div>
  );
}

export default MedalInputField;
