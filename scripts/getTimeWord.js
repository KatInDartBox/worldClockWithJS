const hourObject = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

/**

6:  00    ---> six 
6:  1-5   ---> five past six
6:  6-10  ---> ten past six
6: 11-15  ---> quarter past six
6: 16-20  ---> twenty past six
6: 21-40  ---> half past six
6: 41-45  ---> twenty to seven
6: 46-50  ---> quarter to seven
6: 51-59  ---> ten to seven

 */
/** @param {Date} date */
export function getTimeWord(date) {
  // const minuteName = "five";
  // const pastTo = "past";
  // const hourName = "nine";

  let hour = date.getHours(); //0-23
  hour = hour % 12; // 0-11
  if (hour === 0) hour = 12;

  const minute = date.getMinutes(); //0-59

  let minuteName = "";
  let pastTo = "";

  if (minute === 0) {
    minuteName = "";
    pastTo = "";
  } else if (minute <= 5) {
    minuteName = "five";
    pastTo = "past";
  } else if (minute <= 10) {
    minuteName = "ten";
    pastTo = "past";
  } else if (minute <= 15) {
    minuteName = "quarter";
    pastTo = "past";
  } else if (minute <= 20) {
    minuteName = "twenty";
    pastTo = "past";
  } else if (minute <= 40) {
    minuteName = "half";
    pastTo = "past";
  } else if (minute <= 45) {
    minuteName = "twenty";
    pastTo = "to";
    hour++;
  } else if (minute <= 50) {
    minuteName = "quarter";
    pastTo = "to";
    hour++;
  } else if (minute <= 59) {
    minuteName = "ten";
    pastTo = "to";
    hour++;
  }

  const hourName = hourObject[hour];

  return {
    minuteName,
    pastTo,
    hourName,
  };
}
