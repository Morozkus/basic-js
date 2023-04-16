const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (typeof arr != 'object' || !arr) return false
  const newArray = []

  Array.from(arr).forEach(e => {
    if (Array.isArray(e)) {
      for (const iterator in e) {
        return arr.push(iterator)
      }
    }
    return
  })
  Array.from(arr).forEach(element => {
    if (typeof element === 'string' && isNaN(element)) {
      return newArray.push(String(element.trim().toUpperCase())[0])
    }
    return createDreamTeam(element)
  });
  newArray.sort()
  return newArray.join('')
}

module.exports = {
  createDreamTeam
};
