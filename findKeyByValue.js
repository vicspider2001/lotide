const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create a function called findKeyByValue
// the function should take in a object and a value
// function should scan object and return the first key which contains the value
// function should return undefined if no key is found

const findKeyByValue = function(objects, value) { // function is created
  const keys = Object.keys(objects); // get Object keys of the object called shows
  for (const key of keys) { // loop through the object keys
    if (objects[key] === value) { // Condition the scans through the object and returns the first key
      return key;
    }
  }
  return undefined;
};

const movies = {
  action: "Top Boys",
  Comedy: "Grace Land",
  Suspense: " Wonderland"
};
console.log(findKeyByValue(movies, 'Top Boys'));

assertEqual(findKeyByValue(movies, "Grace Land"), "Comedy");
assertEqual(findKeyByValue(movies, "Top Boys"), "action");
assertEqual(findKeyByValue(movies, "Anaconda"), "action");


