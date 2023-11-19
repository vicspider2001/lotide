// create a function called middle
// middle will take one array
// middle will return the middle-most element(s) of the array
// Use assertArrasEqual function to test middle function
// For arrays with one or two elements, there is no middle. Return an empty array

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

const middle = function(arr) { // creates a function called middle that takes one array
  if (!Array.isArray(arr)) {
    return "Input is not an array"; // if input is not an array
  } else if (arr.length === 1 || arr.length === 2) {
    return [];  // if input has only one or two elements
  } else {
    const compute = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return [arr[compute - 1], arr[Math.floor(arr.length / 2)]]; // Updates copy of array with middle elements from an even array length
       
    } else {
      return [arr[compute]]; // updates copy of array with middle element from an odd array length
      
    }
    
  }
  
};



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

