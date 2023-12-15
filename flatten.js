// create a function called flatten
// flatten will take in elements including nested arrays of elements
// flatten will return a flattened version of the array

const flatten = function(arrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flattenedArray = flattenedArray.concat(arrays[i]);
    } else {
      flattenedArray.push(arrays[i]);
    }
  }
  return flattenedArray;
  
  
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = flatten;
