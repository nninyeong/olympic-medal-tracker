function MedalUpdateButton({
  children,
  medalData,
  medalDataInput,
  setMedalData,
  sortData,
  initializeInput,
}) {
  const countTotalMedal = (data) => {
    data.total = 0;
    data.total += data.gold + data.silver + data.bronze;
  };

  const convertValuesToNumber = (data) => {
    data.gold = +data.gold;
    data.silver = +data.silver;
    data.bronze = +data.bronze;
  };

  const updateButtonHandler = () => {
    if (!medalDataInput.country) {
      alert("국가명을 입력해주세요.");
      return;
    }

    let updatedMedalData = [];
    if (children === "업데이트") {
      const updateCountryData = medalData.find(
        (data) => data.country === medalDataInput.country
      );

      for (let key in medalDataInput) {
        updateCountryData[key] = medalDataInput[key];
      }

      convertValuesToNumber(updateCountryData);
      countTotalMedal(updateCountryData);
      updatedMedalData = [...medalData];
    } else {
      let isDuplicate = medalData.some(
        (data) => data.country === medalDataInput.country
      );
      if (isDuplicate) {
        alert("이미 등록된 국가입니다.");
        return;
      }

      convertValuesToNumber(medalDataInput);
      countTotalMedal(medalDataInput);
      updatedMedalData = [...medalData, medalDataInput];
    }

    initializeInput();

    updatedMedalData = sortData(updatedMedalData);
    setMedalData(updatedMedalData);
  };

  return (
    <button
      type={children === "업데이트" ? "button" : "submit"}
      onClick={updateButtonHandler}
    >
      {children}
    </button>
  );
}

export default MedalUpdateButton;
