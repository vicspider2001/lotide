const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

const equalArray = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (equalArray(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1,2,3,4,5]), [2,3,4,5]);