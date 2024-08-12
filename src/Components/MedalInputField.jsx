function MedalInputField({
  dataType,
  children,
  medalDataInput,
  setMedalDataInput,
}) {
  const defaultValue = dataType === "country" ? "" : "0";

  const inputHandler = (event) => {
    let input = { ...medalDataInput };
    input[`${dataType}`] =
      dataType === "country"
        ? event.currentTarget.value
        : +event.currentTarget.value;
    setMedalDataInput(input);
  };

  return (
    <div className="medalInputField">
      <h3>{children}</h3>
      <input
        type={dataType === "country" ? "text" : "number"}
        id={dataType}
        onChange={inputHandler}
        value={medalDataInput[`${dataType}`] || defaultValue}
        placeholder={dataType === "country" ? "국가 입력" : ""}
      ></input>
    </div>
  );
}

export default MedalInputField;
