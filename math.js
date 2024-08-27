// one
const sum = (a, b) => a + b;
// two
const sub = (a, b) => a - b;
// three
function printPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr.split("").reverse().join("");
}
// four
function factorial(n) {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// five
function findMax(arr) {
  if (arr.length === 0) {
      throw new Error("Array cannot be empty");
  }
  return Math.max(...arr);
}
// six
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// seven, eight, nine
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}
// ten
function* range(start, end, stepper) {
  while (start <= end) {
    yield start;
    start += stepper;
  }
}

module.exports = {
  sum,
  sub,
  printPalindrome,
  factorial,
  findMax,
  removeDuplicates,
  Person,
  range,
};
