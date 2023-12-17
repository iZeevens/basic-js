const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let object = { turns: 0, seconds: 0 },
    diskNumber = 1;

  for (let i = 1; i < disksNumber; i++) {
    diskNumber = diskNumber * 2 + 1;
  }
  object["turns"] = diskNumber;
  object["seconds"] = Math.floor(diskNumber / (turnsSpeed / 3600));
  return object;
}

module.exports = {
  calculateHanoi,
};
