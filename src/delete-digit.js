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
  let array = Array.from(String(n), Number);
  let lessNumber = 9;
  array.forEach((num) => {
    if (num < lessNumber) {
      lessNumber = num;
    }
  });
  array.splice(array.indexOf(lessNumber), 1);
  return +array.join("");
}

module.exports = {
  deleteDigit,
};
