// create a function called flatten
// flatten will take in elements including nested arrays of elements
// flatten will return a flattened version of the array

const flatten = function(arrays) {
  let flattenedArray = [];
  if (!Array.isArray(arrays)) {
    console.log("You do not have an Array to flatten");
      
  } else {
    flattenedArray.push(arrays); // to create a copy of the original array
  }
  return flattenedArray.flat(Infinity);
  
  
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


const checkArray = ([1, 2, [3, 4], 5, [6]]);
flatten(checkArray);
assertArraysEqual(checkArray, [1, 2, [3, 4], 5, [6]]);
console.log(flatten([0, 1, [2, [3, [4, 5]]]]));
console.log(flatten(["Apple", "Orange", "Grapes", ["Mango"], ["1", "2"]]));
