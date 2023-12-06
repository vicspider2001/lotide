const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1,2,3,4,5]), [2,3,4,5]);

