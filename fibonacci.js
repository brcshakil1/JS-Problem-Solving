// Fibonacci series = 0,1,1,2,3,5,8,13,21,34....

// const getFibonacci = (n) => {
//   let a = 0,
//     b = 1,
//     temp;

//   while (n > 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     n--;
//   }
//   return a;
// };

// console.log(getFibonacci(8));

const getFibonacci = (n) => {
  let a = 0,
    b = 1,
    temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return a;
};

console.log(getFibonacci(9));
