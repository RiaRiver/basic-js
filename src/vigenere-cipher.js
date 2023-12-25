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
  constructor(flag = true) {
    this.direct = flag;
    this.dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) this.throwError();

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let keyInd = 0;

    const encrypted = [...upperMessage].map((char) => {
      const charInd = this.dict.indexOf(char);
      const cryptInd = this.dict.indexOf(upperKey[keyInd % (upperKey.length)]);

      if (charInd !== -1) {
        keyInd += 1;

        return this.dict[(charInd + cryptInd) % 26];
      }

      return char;
    });

    return this.direct ? encrypted.join('') : encrypted.reverse().join('');
  }

  decrypt(encrypted, key) {
    if (!encrypted || !key) this.throwError();

    const upperEncrypted = encrypted.toUpperCase();
    const upperKey = key.toUpperCase();

    let keyInd = 0;

    const message = [...upperEncrypted].map((char, ind) => {
      const charInd = this.dict.indexOf(char);
      const cryptInd = this.dict.indexOf(upperKey[keyInd % (upperKey.length)].toUpperCase());

      if (charInd !== -1) {
        keyInd += 1;

        const diffInd = charInd - cryptInd;
        const dictInd = diffInd >= 0 ? diffInd : 26 + diffInd;

        return this.dict[dictInd];
      }

      return char;
    });

    return this.direct ? message.join('') : message.reverse().join('');
  }

  // eslint-disable-next-line class-methods-use-this
  throwError() {
    throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
