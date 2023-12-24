const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  counter: 0,

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`(${value})`);
    return this;
  },
  removeLink(/* position */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    return this.chain.join("~~");
  },
};

module.exports = {
  chainMaker,
};
