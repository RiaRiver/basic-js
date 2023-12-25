const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${(value)} )`);

    return this;
  },

  removeLink(position) {
    const ind = position - 1;

    if (this.chain[ind] === undefined) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(ind, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    const chainStr = this.chain.join('~~');

    this.chain = [];

    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
