function MedalInputField({ dataType, medalDataInput, setMedalDataInput }) {
  const isNumber = (value) => {
    const regex = /^\d+$/;
    return regex.test(value);
  };

  const inputHandler = (event) => {
    if (dataType !== "country" && !isNumber(event.currentTarget.value)) {
      alert("메달 수에는 숫자만 입력해주세요!");
      return;
    }

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
        type="text"
        id={dataType}
        onChange={inputHandler}
        value={medalDataInput[dataType]}
        placeholder={dataType === "country" ? "국가 입력" : ""}
      ></input>
    </div>
  );
}

export default MedalInputField;
