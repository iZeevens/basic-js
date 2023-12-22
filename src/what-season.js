const { NotImplementedError } = require("../extensions/index.js");

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
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function getSeason(date) {
  if (!date) {
    return ("Unable to determine the time of year!");
  }
  try {
    const year = date.getUTCFullYear(),
    month = date.getUTCMonth() + 1,
    day = date.getUTCDate();

    
  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "autumn";
  } else if (month === 12 || (month <= 2 && month > 0)) {
    return "winter";
  }
  } catch {
    throw Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
};
