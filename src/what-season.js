const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date[Symbol.toStringTag]) throw new Error('Invalid date!');

  const seasons = ['winter', 'spring', 'summer', 'autumn']
  const monthNumber = date.getMonth() + 1;

  const seasonInd = monthNumber === 12 ? 0 : Math.floor(monthNumber / 3);

  return seasons[seasonInd];
}

console.log(getSeason(new Date(2020, 02, 31)));
module.exports = {
  getSeason,
};
