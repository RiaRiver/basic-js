const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counter = {
    increase(prop) {
      const { [prop]: count } = this;
      this[prop] = count ? count + 1 : 1;
    },
  };

  return names.map((name) => {
    const { [name]: count } = counter;

    const result = count ? `${name}(${count})` : name;

    counter.increase(name);

    if (result !== name) counter.increase(result);

    return result;
  });
}

module.exports = {
  renameFiles,
};
