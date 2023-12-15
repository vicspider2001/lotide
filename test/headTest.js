//Needed to test Lotide Head which returns the first element of an array
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('return 5 from [5,6,7,8]', () => {
    assert.strictEqual(head([5,6,7,8]), 5);
  });

  it('return Hello from [Hello, Lighthouse, Labs]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('Return Empty from an empty array', () => {
    assert.strictEqual(head([]), "undefined");
  });
});


