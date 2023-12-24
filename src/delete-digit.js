const { NotImplementedError } = require('../extensions/index.js');

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
  const deleteIndexedDigit = (_, ind, arr) => {
    const copyArr = [...arr];

    copyArr.splice(ind, 1);

    return Number(copyArr.join(''));
  };

  const digits = Array.from(String(n));
  return Math.max(...digits.map(deleteIndexedDigit));
}

module.exports = {
  deleteDigit,
};
