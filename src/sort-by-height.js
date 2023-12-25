const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortFunction = (a, b) => a - b;

  const result = [...arr];

  const sortedPositives = [...arr].filter((value) => value > 0)
    .sort(sortFunction);

  let index = 0;

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] > 0) {
      result[i] = sortedPositives[index];
      index += 1;
    }
  }

  return result;
}

module.exports = {
  sortByHeight,
};
