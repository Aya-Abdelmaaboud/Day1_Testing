const {
  sum,
  sub,
  printPalindrome,
  factorial,
  range,
  findMax,
  removeDuplicates,
  Person,
} = require("./math");

// one
test("test sum fn that takes 2 numbers", () => {
  const result = sum(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
// two
test("test sub fn that takes 2 numbers", () => {
  const result = sub(6, 2);
  const expected = 4;
  expect(result).toBe(expected);
});
// three
test("test Palindrome", () => {
  const result = printPalindrome("door");
  const expected = "rood";
  expect(result).toBe(expected);
});
// four
test("test factorial", () => {
  const result = factorial(5);
  const expected = 5 * 4 * 3 * 2 * 1;
  expect(result).toBe(expected);
});
// five
test("test max of an array", () => {
  const result = findMax([3, 10, 20, 30, 100]);
  const expected = 100;
  expect(result).toBe(expected);
});
// six
test("remove duplicate from array", () => {
  const result = removeDuplicates([3, 5, 8, 20, 10, 3]);
  const expected = [3, 5, 8, 20, 10];
  expect(result).toEqual(expected);
});
// seven, eight, nine
expect.extend({
  toBeInstanceOfPerson(received) {
    const pass = received instanceof Person;
    if (pass) {
      return {
        message: () => `expected ${received} not to be an instance of Person`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be an instance of Person`,
        pass: false,
      };
    }
  },
});
test("object is an instance of Person", () => {
  const person = new Person("Aya", 30);
  expect(person).toBeInstanceOfPerson();
});
// ten
test("test iterator", () => {
  const result = [...range(0, 10, 2)];
  const expected = [0, 2, 4, 6, 8, 10];
  expect(result).toEqual(expected);
});
