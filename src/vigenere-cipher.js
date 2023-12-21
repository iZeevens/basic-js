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
  constructor(boolean) {
    this.boolean = boolean ?? true,
    this.matrix = []
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

  encrypt(word, key) {
    if (!word || !key) {
      throw Error("Incorrect arguments!");
    }
    let newWorld = word.toUpperCase().split("");
    let newKey = [],
      resultEncrypt = [];

    while (newKey.length < newWorld.length) {
      newKey.push(...key.toUpperCase().split(""));
    }
    this.matrixVigenere();
    while (resultEncrypt.length !== word.length) {
      let newWorldCurrentArray = newWorld[0],
        indexArray = null,
        indexWorld = null;

      if (!/[a-zA-Z]/.test(newWorldCurrentArray)) {
        resultEncrypt.push(newWorld.shift());
        continue;
      }

      for (let i = 0; i < this.matrix[0].length; i++) {
        if (this.matrix[0][i] === newWorld[0]) {
          indexWorld = i;
          newWorld.shift();
          break;
        }
      }

      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][0] === newKey[0]) {
          indexArray = i;
          newKey.shift();
          break;
        }
      }

      resultEncrypt.push(this.matrix[indexArray][indexWorld]);
    }

    
    if (!this.boolean) {
      return resultEncrypt.reverse().join("")
    } else {
      return resultEncrypt.join("")
    }
    // return resultEncrypt.join("");
  }
  decrypt(encryptWord, key) {
    if (!encryptWord || !key) {
      throw Error("Incorrect arguments!");
    }
    const newEncryptWorld = encryptWord.toUpperCase().split("");
    let newKeyWorld = [],
      resultDecrypt = [];

    while (newKeyWorld.length < newEncryptWorld.length) {
      newKeyWorld.push(...key.toUpperCase().split(""));
    }

    this.matrixVigenere();
    while (resultDecrypt.length !== encryptWord.length) {
      let indexWord = null;

      if (!/[a-zA-Z]/.test(newEncryptWorld[0])) {
        resultDecrypt.push(newEncryptWorld.shift());
        continue;
      }

      for (let i = 0; i < this.matrix.length; i++) {
        if (indexWord !== null) {
          break;
        }
        if (this.matrix[i][0] === newKeyWorld[0]) {
          newKeyWorld.shift();
          for (let j = 0; j < this.matrix[i].length; j++) {
            if (this.matrix[i][j] === newEncryptWorld[0]) {
              indexWord = j;
              newEncryptWorld.shift();
              break;
            }
          }
        }
      }

      resultDecrypt.push(this.matrix[0][indexWord]);
    }

    if (!this.boolean) {
      return resultDecrypt.reverse().join("")
    } else {
      return resultDecrypt.join("")
    }
    // return resultDecrypt.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
