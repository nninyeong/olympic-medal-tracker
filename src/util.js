const onlyNumRegex = /^\d+$/;
export const formValidation = (input) => {
  if (input.country === "") {
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
