function MedalUpdateButton({
  children,
  medalData,
  medalDataInput,
  setMedalData,
  setMedalDataInput,
  sortData,
}) {
  const countTotalMedal = (data) => {
    data.total = 0;
    data.total += data.gold + data.silver + data.bronze;
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

      countTotalMedal(medalDataInput);
      updatedMedalData = [...medalData, medalDataInput];
    }

    setMedalDataInput({ country: "", gold: 0, silver: 0, bronze: 0, total: 0 });

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
