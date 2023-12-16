const { NotImplementedError } = require('../extensions/index.js');

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
  let strOutput = '',
        repeatTimes = options.repeatTimes ?? '',
        separator = options.separator ?? '+',
        addition = options.addition ?? '|',
        additionRepeatTimes = options.additionRepeatTimes ?? '',
        additionSeparator = options.additionSeparator ?? ''

    for (let repeatStr = 0; repeatStr < repeatTimes; repeatStr++) {
        strOutput += str

        if (additionRepeatTimes) {
            for (let repeatAdd = 0; repeatAdd < additionRepeatTimes; repeatAdd++) {
                strOutput += addition

                if (additionSeparator && additionRepeatTimes > 1 && additionRepeatTimes - repeatAdd > 1) {
                    strOutput += additionSeparator
                }
            }
        }
        
        if (separator && separator > 1 && separator - repeatStr > 1) {
            strOutput += separator
        }
    }
    return strOutput
}

module.exports = {
  repeater
};
