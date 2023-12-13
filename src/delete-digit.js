const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = Array.from(String(n), Number),
    testArray = [...array],
    number = 0;

  for (let i = 0; i < array.length; i += 1) {
    testArray.splice(i, 1);
    testArray = +testArray.join("");

    if (testArray > number) {
      number = testArray;
      testArray = [...array];
    } else {
      testArray = [...array];
    }
  }

  return number;
}

module.exports = {
  deleteDigit,
};
