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
  let removeWhiteSpace = sentence.replace(/\s/g, ''); // to remove space between words
  for (let letters of removeWhiteSpace) {
    letterCount[letters] = (letterCount[letters] || 0) + 1;
    
  }
  
  return letterCount;
  
};

const result = countLetters("LHL");
const result2 = countLetters("This is the original");
const newResult = { L: 2, H: 1 };
const newResult2 = {T: 1, h: 2, i: 4, s: 2, t: 1, e: 1, o: 1, r: 1, g: 1, n: 1, a: 1, l: 1};
assertEqual(result['L'], newResult['L']);
assertEqual(result['H'], newResult['H']);
assertEqual(result2['T'], newResult2['T']);
assertEqual(result2['h'], newResult2['h']);
assertEqual(result2['i'], newResult2['i']);
assertEqual(result2['s'], newResult2['s']);
assertEqual(result2['t'], newResult2['t']);
assertEqual(result2['e'], newResult2['e']);
assertEqual(result2['o'], newResult2['o']);
assertEqual(result2['r'], newResult2['r']);
assertEqual(result2['g'], newResult2['g']);
assertEqual(result2['n'], newResult2['n']);
assertEqual(result2['a'], newResult2['a']);
assertEqual(result2['l'], newResult2['l']);


