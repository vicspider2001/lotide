
// TEST CODE
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

//FUNCTION CODE

// create a function called letterPositions
// letterPositions will return all the indices (positions) where each character is found
// for each letter return the number of positions (indices) where it occurred

const letterPositions = function(sentence) { // letterPositions function is created to take in a sentence
  let results = {}; // declared an object called results
  
  for (let a in sentence) { // loop through sentence to get the indices of the letters in non-spaced sentence
    const letter = sentence[a]; // get the elements of non-spaced sentence
    if (/[a-zA-Z]/.test(letter)) { // remove space between words
      if (!results[letter]) { // check if each element is not a key
        results[letter] = []; // create an array to collect the number of occurrences
      }
      results[letter].push(Number(a)); // push the number of occurrences into the array for each element
    }
    
  }
  return results;
};
module.exports = letterPositions;