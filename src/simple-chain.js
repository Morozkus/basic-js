const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  finish: [],

  getLength() {
     this.arr.length
     return this
  },
  
  addLink(value = '') {
     this.arr.push(`( ${value} )`)
     return this
  },
  
  removeLink(pos) {
    let position = pos - 1
    if (position < 0 || position >= this.arr.length || typeof pos !== 'number' || !(Number.isInteger(pos))) {
      this.arr.length = 0
      throw new Error ('You can\'t remove incorrect link!')
     
    }

     this.arr.splice(position, 1)
     return this
  },
  
  reverseChain() {
     this.arr.reverse()
     return this
  },
  
  finishChain() {
    this.finish = this.arr.join('~~')
    this.arr.length = 0;
     return this.finish
  },
};

module.exports = {
  chainMaker
};
