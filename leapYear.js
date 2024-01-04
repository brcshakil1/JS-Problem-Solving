// const getLeapYear = (year) =>
//   year % 4 === 0 && year % 100 !== 0
//     ? `${year} is leap year`
//     : year % 400 === 0
//     ? `${year} is leap year`
//     : `${year} isn't leap year.`;

// console.log(getLeapYear(2012));

const getLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `${year} is leap year`;
  } else if (year % 400 == 0) {
    return `${year} is leap year`;
  }
  return `${year} isn't leap year`;
};

const result = getLeapYear(2024);

console.log(result);
