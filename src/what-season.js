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

function leapYear(year) {
  const checkYearLeap = year % 100;

  if (Number.isInteger(checkYearLeap)) {
      if (Number.isInteger(checkYearLeap % 400)) {
          return true
      }
  } else {
      return false
  }
}

function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
