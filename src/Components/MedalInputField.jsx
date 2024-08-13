const FIELD_TITLE = {
  country: "국가명",
  gold: "금메달 수",
  silver: "은메달 수",
  bronze: "동메달 수",
};

function MedalInputField({ dataType, medalDataInput, inputHandler }) {
  return (
    <div className="medalInputField">
      <h3>{FIELD_TITLE[dataType]}</h3>
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
