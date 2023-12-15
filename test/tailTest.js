//Needed to test Lotide tail.js which returns the tail elements of an array
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns [Lighthouse, Labs] from [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [ "Lighthouse", "Labs" ]);
  });

  it('return [2,3,4,5] from [1,2,3,4,5]', () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });

 
});

