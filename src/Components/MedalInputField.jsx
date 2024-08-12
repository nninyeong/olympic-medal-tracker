function MedalInputField({
  dataType,
  children,
  medalDataInput,
  setMedalDataInput,
}) {
  const inputHandler = (event) => {
    let input = { ...medalDataInput };
    input[dataType] = event.currentTarget.value;
    setMedalDataInput(input);
  };

  return (
    <div className="medalInputField">
      <h3>{children}</h3>
      <input
        type={dataType === "country" ? "text" : "number"}
        id={dataType}
        onChange={inputHandler}
        value={medalDataInput[dataType]}
        placeholder={dataType === "country" ? "국가 입력" : ""}
      ></input>
    </div>
  );
}

export default MedalInputField;
