const { NotImplementedError } = require("../extensions/index.js");

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
  if (domains.length === 0) {
    return {}
  }
  let array = domains.map((item) => item.split(".").reverse()),
    object = {};

  array.push([array[0][0]]);
  array.sort();

  let arrayJoined = array.map((item) => "." + item.join("."));

  for (let i = 0; i < arrayJoined.length; i++) {
    let element = arrayJoined[i],
      counter = 1;

    for (let j = 0; j <= arrayJoined.length; j++) {
      if (element === arrayJoined[j]) {
        continue;
      }
      if (arrayJoined[j] && arrayJoined[j].includes(element)) {
        counter++;
      } else {
        if (element === arrayJoined[0]) {
          object[element] = counter - 1;
        } else {
          object[element] = counter;
        }
      }
    }
  }

  return object;
}

module.exports = {
  getDNSStats,
};
