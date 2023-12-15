//Needed to test Lotide middle.js which returns the middle element of an array
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [ 3 ]);
  });

  it('return 2 from [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('return [] from [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('Return [] from [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it('Return [2,3] from [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('Return [3,4] from [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it('Return [b] from [a, b, c]', () => {
    assert.deepEqual(middle(['a','b','c']), ['b']);
  });

  it('Return [b,c] from [a,b,c,d]', () => {
    assert.deepEqual(middle(['a','b','c','d']), ['b','c']);
  });

  it('Return Input is not an array from (1, 2, 3, 4, 5)', () => {
    assert.strictEqual(middle((1,2,3,4,5,6)), "Input is not an array");
  });
});
