const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const word = ['--discard-next',  '--discard-prev', '--double-next', '--double-prev']
  const newArray = []

  for (let i = 0; i < arr.length;) {
    if (arr[i] === '--discard-next' && i + 1 < arr.length) {
      i += 2
    }
    
    if (arr[i] === '--discard-prev' && arr[i - 2] != '--discard-next' && arr[i - 1] != undefined) {
      newArray.pop()
      i += 1
    }
    
    if (arr[i] === '--double-next' && i + 1 < arr.length) {
      newArray.push(arr[i + 1])
      i += 1
    }
    
    if (arr[i] === '--double-prev' && arr[i - 2] != '--discard-next' && arr[i - 1] != undefined) {
      newArray.push(arr[i - 1])
      i += 1
    }

    if (word.includes(arr[i]) && i < arr.length) {
      i += 1
      continue;
    }
      newArray.push(arr[i])
      i += 1
  }

  return newArray
}

module.exports = {
  transform
};
