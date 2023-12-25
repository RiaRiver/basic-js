const { NotImplementedError } = require('../extensions/index.js');

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
  const isOutOfRange = (r, c) => r < 0
    || r > matrix.length - 1
    || c < 0
    || c > matrix[0].length - 1;

  const getSurroundingsSum = (item, [rowN, colN]) => {
    let sum = 0;

    for (let row = rowN - 1; row <= rowN + 1; row += 1) {
      for (let col = colN - 1; col <= colN + 1; col += 1) {
        if (!isOutOfRange(row, col)) {
          sum += matrix[row][col];
        }
      }
    }

    return sum - item;
  };

  return matrix.map((row, rowInd) => row
    .map((item, colInd) => getSurroundingsSum(item, [rowInd, colInd])));
}

module.exports = {
  minesweeper,
};
