const addSchoolNumber = (grade: string, room: string, number: string) => {
  if (number.length === 2) {
    const returnData: string = grade + room + number;

    return returnData;
  } else if (number.length === 1) {
    const returnData: string = grade + room + "0" + number;

    return returnData;
  } else {
    console.log("잘 못된 값이 있습니다.");
  }
};

export default addSchoolNumber;
