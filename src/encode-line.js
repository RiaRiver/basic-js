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
  const result = [];
  let count = 1;

  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];
    const next = str[i + 1];

    if (current === next) {
      count += 1;
    } else {
      const prefix = count < 2 ? '' : count;

      result.push(`${prefix}${current}`);

      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine,
};
