const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === 'number') {
          stack.push(arr[i]);
          continue;
      }

      if (arr[i] === '--discard-prev') {
          stack.pop();
          continue;
      } else if (arr[i] === '--discard-next') {
          i += 2
          continue;
      }

      if (arr[i] === '--double-prev') {
          stack.push(arr[i - 1]);
      } else if (arr[i] === '--double-next') {
          stack.push(arr[i + 1]);
      }
  }

  return stack
}

module.exports = {
  transform
};
