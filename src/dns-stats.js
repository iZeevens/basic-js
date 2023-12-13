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
  let array = domains.map((item) => item.split('.').reverse()),
        arrayJoined = [];
        arrayValues = [],
        objDns = {}

    array.push([array[0][0]])
    array.sort()
    array.forEach((item) => {
        arrayJoined.push('.' + item.join('.'))
    })

    // array.forEach((item) => {
    //     objDns['.' + item.toString().replace(/,/g, '.')] = 1
    // })

    
    // objDns['.' + item.toString().replace(/,/g, '.')] = 1
    return arrayJoined
}

module.exports = {
  getDNSStats
};
