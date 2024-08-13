const onlyNumRegex = /^\d+$/;
const onlyBlankRegex = /^\s*$/;
export const formValidation = (input) => {
  if (onlyBlankRegex.test(input.country)) {
    return {
      isValid: false,
      message: "국가명을 입력해주세요.",
    };
  }

  if (!onlyNumRegex.test(input.gold)) {
    return {
      isValid: false,
      message: "금메달 수를 확인해주세요",
    };
  }

  if (!onlyNumRegex.test(input.silver)) {
    return {
      isValid: false,
      message: "은메달 수를 확인해주세요",
    };
  }

  if (!onlyNumRegex.test(input.bronze)) {
    return {
      isValid: false,
      message: "동메달 수를 확인해주세요",
    };
  }

  return {
    isValid: true,
  };
};

export const sortData = (data, sortOption) => {
  let sortedData = [...data];
  if (sortOption === "금은동 우선순위") {
    sortedData.sort((a, b) => {
      if (+a.gold !== +b.gold) return b.gold - a.gold;
      else if (+a.silver !== +b.silver) return b.silver - a.silver;
      else return b.bronze - a.bronze;
    });
  } else if (sortOption === "총 메달수") {
    sortedData.sort((a, b) => {
      return b.total - a.total;
    });
  }

  return sortedData;
};
