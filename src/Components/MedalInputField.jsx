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

  const fieldTitle = {
    country: "국가명",
    gold: "금메달 수",
    silver: "은메달 수",
    bronze: "동메달 수",
  };

  return (
    <div className="medalInputField">
      <h3>{fieldTitle[dataType]}</h3>
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
