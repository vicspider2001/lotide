const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("hello", "hello"));
// console.log(assertEqual("hello", "world"));
// console.log(assertEqual(42, 42));
// console.log(assertEqual(42, 7));


const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
    
  }
  return undefined;
};

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(test);
assertEqual(test, "noma");