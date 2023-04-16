const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 1,
      this.arr = []
  }

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr[i].flat()
          this.count += 1;
        }
      }
    }

    return this.count
  }
}

module.exports = {
  DepthCalculator
};
