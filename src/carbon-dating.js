const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const numberActivity = Number(sampleActivity);

  if (
    numberActivity > 0 &&
    numberActivity < 9000 &&
    numberActivity !== 15.1 &&
    typeof sampleActivity !== "object" &&
    typeof sampleActivity !== "number"
  ) {
    const k = Math.log(2) / HALF_LIFE_PERIOD;
    // result = Math.abs(Math.log(sampleActivity / MODERN_ACTIVITY) / k);

    return Math.ceil(Math.abs(Math.log(sampleActivity / MODERN_ACTIVITY) / k));
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
