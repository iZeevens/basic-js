const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strOutput = "",
    repeatTimes = options.repeatTimes ?? 1,
    separator = options.separator ?? "+",
    addition = options.addition ?? "",
    additionRepeatTimes = options.additionRepeatTimes ?? 1,
    additionSeparator = options.additionSeparator ?? "";

  for (let repeatStr = 0; repeatStr < repeatTimes; repeatStr++) {
    let repeatSeporator = repeatStr + 1;
    strOutput += str;

    for (let addStr = 0; addStr < additionRepeatTimes; addStr++) {
      if (additionRepeatTimes) {
        strOutput += addition;
        if (
          additionSeparator &&
          additionRepeatTimes > 1 &&
          additionRepeatTimes - addStr > 1
        ) {
          strOutput += additionSeparator;
        }
      } else if (!additionRepeatTimes && additionRepeatTimes - addStr > 1) {
        strOutput += addition;
      }
    }

    if (repeatSeporator < repeatTimes) {
      strOutput += separator;
    }
  }
  return strOutput;
}

module.exports = {
  repeater,
};
