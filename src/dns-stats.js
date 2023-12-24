const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Function
  const getAppearances = (domain) => {
    const reversed = domain.split('.').reverse().join('.');
    let ind = 0;
    const appearances = [];

    while (ind >= 0) {
      ind = reversed.indexOf('.', ind + 1);

      const end = ind > -1 ? ind : undefined;

      appearances.push(`.${reversed.slice(0, end)}`);
    }

    return appearances;
  };

  // Main
  return domains.flatMap(getAppearances).reduce((stat, appearance) => {
    // eslint-disable-next-line no-param-reassign
    stat[appearance] = stat[appearance] ? stat[appearance] + 1 : 1;
    return stat;
  }, {});
}

module.exports = {
  getDNSStats,
};
