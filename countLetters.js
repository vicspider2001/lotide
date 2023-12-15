const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// this function takes in a sentence as a string
// loop through the sentence and return a count of each of the letters in the sentence

const countLetters = function(sentence) {
  let letterCount = {};
  let removeWhiteSpace = sentence.replace(/\s/g, ''); // to remove space between words
  for (let letters of removeWhiteSpace) {
    letterCount[letters] = (letterCount[letters] || 0) + 1;
    
  }
  
  return letterCount;
  
};
 module.exports = countLetters;


