const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// create a function called countLetters
// the function should take in a sentence as a string
// loop through the sentence and return a count of each of the letters in the sentence

const countLetters = function(sentence) {
  let letterCount = {};
  let removeWhiteSpace = sentence.replace(/\s/g, '').toLowerCase(); // to remove space between words
  for (let letters of removeWhiteSpace) {
    letterCount[letters] = (letterCount[letters] || 0) + 1;
    
  }
  
  return letterCount;
  
};

const result = countLetters("LHL");
const newResult = { l: 2, h: 1 };
assertEqual(result['l'], newResult['l']);
assertEqual(result['h'], newResult['h']);


