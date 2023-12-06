// create a function called middle
// middle will take one array
// middle will return the middle-most element(s) of the array
// Use assertArrasEqual function to test middle function
// For arrays with one or two elements, there is no middle. Return an empty array

const middle = function(arr) { // creates a function called middle that takes one array
  if (!Array.isArray(arr)) {
    return "Input is not an array"; // if input is not an array
  } else if (arr.length === 1 || arr.length === 2) {
    return [];  // if input has only one or two elements
  } else {
    const compute = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return [arr[compute - 1], arr[compute]]; // Updates copy of array with middle elements from an even array length
       
    } else {
      return [arr[compute]]; // updates copy of array with middle element from an odd array length
      
    }
    
  }
  
};

module.exports = middle;

