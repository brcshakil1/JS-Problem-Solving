const getFactorial = (number) => {
  if (number === 0) return 1;
  let n = 1;
  for (let i = 1; i <= number; i++) n *= i;
  return n;
};
console.log(getFactorial(5));
