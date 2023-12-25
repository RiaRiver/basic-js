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
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];

  for (let ind = 0; ind < arr.length; ind += 1) {
    const item = arr[ind];

    if (typeof item !== 'string') result.push(item);
    else {
      const prev = arr[ind - 1];
      const next = arr[ind + 1];

      switch (item) {
        case '--discard-prev': {
          if (prev) {
            result.length -= 1;
          }

          break;
        }

        case '--double-next': {
          if (next) {
            result.push(next);
          }

          break;
        }

        case '--double-prev': {
          if (prev) {
            result.push(prev);
          }

          break;
        }

        case '--discard-next': {
          const overOneNext = arr[ind + 2];
          const re = /--(discard|double)-prev/;

          if (typeof overOneNext === 'string' && re.test(overOneNext)) {
            ind += 2;
          } else ind += 1;

          break;
        }

        default: result.push(item);
      }
    }
  }

  return result;
}

module.exports = {
  transform,
};
