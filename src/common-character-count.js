const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrayS1 = s1.split('')
  let arrayS2 = s2.split('')
  let counter = 0;

  arrayS1.forEach((item) => {
      console.log(item)
      if (arrayS2.indexOf(item) > -1) {
          let curentItem = arrayS2.indexOf(item)
          counter += 1
          arrayS2.splice(curentItem, 1)
      }
  })
  return counter
}

module.exports = {
  getCommonCharacterCount
};
