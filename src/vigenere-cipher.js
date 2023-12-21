const { NotImplementedError } = require("../extensions/index.js");

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
    this.matrix = [];
  }

  matrixVigenere() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.matrix.push([...alphabet]);

    for (let i = 0; i < 25; i++) {
      let firstElem = alphabet[0];
      alphabet.shift();
      alphabet.push(firstElem);

      this.matrix.push([...alphabet]);
    }
    return this.matrix;
  }

  encrypt(world, key) {
    const newWorld = world.toUpperCase().split("");
    let newKey = [],
      resultEncrypt = [];

    while (newKey.length < newWorld.length) {
      newKey.push(...key.toUpperCase().split(""));
    }

    let indexArray = null,
      indexWorld = null;

    this.matrixVigenere();

    while (resultEncrypt.length !== world.length) {
      if (newWorld[0] === " " || newWorld[0] === "!") {
        resultEncrypt.push(newWorld[0]);
        continue;
      }

      if (indexWorld === null) {
        for (let i = 0; i < this.matrix[0].length; i++) {
          if (this.matrix[0][i] === newWorld[0]) {
            indexWorld = i;
            newWorld.shift();
            break;
          }
        }
      }
      if (indexArray === null) {
        for (let i = 0; i < this.matrix.length; i++) {
          if (this.matrix[i][0] === newKey[0]) {
            indexArray = i;
            newKey.shift();
            break;
          }
        }
      }

      if (indexArray !== null && indexWorld !== null) {
        resultEncrypt.push(this.matrix[indexArray][indexWorld]);
        indexArray = null;
        indexWorld = null;
      }
    }

    return resultEncrypt.join("");
  }
  decrypt() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
