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
  const s1Arr = Array.from(s1);
  const s2Arr = Array.from(s2);

  return s1Arr.reduce((count, char) => {
    const index = s2Arr.indexOf(char);

    if (index !== -1) {
      s2Arr[index] = null;
      return count + 1;
    }

    return count;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
