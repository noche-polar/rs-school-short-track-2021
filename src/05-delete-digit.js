/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNum = 0;
  let minNum = 0;
  const numArr = n.toString().split('');

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i + 1]) { minNum = numArr[i]; }
    if (numArr.length === 2) {
      if (numArr[i] < numArr[i + 1]) { minNum = numArr[i]; } else { minNum = numArr[i + 1]; }
      break;
    }
  }

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === minNum) { numArr.splice(i, 1); }
  }

  newNum = +numArr.join('');

  return newNum;
}

module.exports = deleteDigit;
