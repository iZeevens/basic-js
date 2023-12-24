const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let stack = [];

  names.forEach((item) => {
    if (!stack.includes(item)) {
      stack.push(item);
    } else {
      if (stack.includes(item + "(1)")) {
        for (let i = 1; i < 10; i++) {
          if (stack.includes(item + `(${i})`)) {
            continue;
          } else {
            stack.push(item + `(${i})`);
            break;
          }
        }
      } else {
        stack.push(item + "(1)");
      }
    }
  });
  return stack;
}

module.exports = {
  renameFiles,
};
