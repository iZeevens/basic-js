const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = "",
  counter = 1;

for (let i = 1; i <= str.length; i++) {
  let firstItem = i - 1;

  if (str.charAt(firstItem) !== str.charAt(i)) {
    if (counter > 1) {
      encodeStr += counter;
      encodeStr += str.charAt(firstItem);
      counter = 1;
    } else {
      encodeStr += str.charAt(firstItem);
    }
  } else {
    counter += 1;
  }
}
return encodeStr;
}

module.exports = {
  encodeLine
};
