const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
      this.matrix = []
  }

  matrixVigenere() {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      this.matrix.push([...alphabet]);

      for (let i = 0; i < 25; i++) {
          let firstElem = alphabet[0];
          alphabet.shift();
          alphabet.push(firstElem)

          this.matrix.push([...alphabet]);
      }
      return this.matrix
  }

  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
