const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let stack = [],
    regex = /[0-9A-F]/i;

  for (let i = 0; i < n.length - 2; i++) {
    let currentSymbol = n[i];

    if (regex.test(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length < 2) {
        return false;
      } else if (currentSymbol === "-") {
        stack = [];
      }
    }
  }

  return stack.length === 0;
}
module.exports = {
  isMAC48Address,
};
