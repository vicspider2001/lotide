const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testArray = [1, 2, 3];
const testedArray = middle(testArray);
assertArraysEqual(testedArray, [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [ 2, 3 ]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 3 ]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ]);
assertArraysEqual(middle(['a', 'b', 'c']), [ 'b' ]);
assertArraysEqual(middle(['a', 'b', 'c', 'e']), [ 'b', 'c' ]);
assertArraysEqual(middle(1, 2, 3, 4, 5), "Input is not an array");
assertArraysEqual(middle('a', 'd', 'c', 'd', 'e'), "Input is not an array");
