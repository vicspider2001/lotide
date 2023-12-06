const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testArray = [1, 2, 3];
const testedArray = middle(testArray);
assertArraysEqual(testedArray, [2]);
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle(['a', 'b', 'c']));
console.log(middle(['a', 'b', 'c', 'e']));
console.log(middle(1, 2, 3, 4, 5));
console.log(middle('a', 'd', 'c', 'd', 'e'));
