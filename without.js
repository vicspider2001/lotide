//without function will :
// take in a source and itemToRemove arrays
// return a new array
// with only those elements from source array
// that are not present in the itemsToRemove array

const without = function(source, itemToRemove) {
  let outcome = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemToRemove.includes(source[i])) {
      outcome.push(source[i]);
    }
    
  }
  return outcome;
  
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

module.exports = without;

