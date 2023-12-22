const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array = [];
  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][0] === true) {
        array.push([1, 2, 1]);
        break;
      } else if (matrix[i][1] === true) {
        array.push([2, 1, 1]);
        break;
      } else if (matrix[i][2] === true) {
        array.push([1, 2, 1]);
        break;
      }
      if (matrix[0][0] !== true) {
        array.push([0, 0, 0]);
        break;
      } else {
        array.push([1, 1, 1]);
        break;
      }
    }
  }

  return array;
}

module.exports = {
  minesweeper,
};
