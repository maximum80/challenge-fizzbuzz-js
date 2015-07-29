var assert = require("chai").assert;
var fizzbuzz = require("../app.js").fizzbuzz;

function answer(n) {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return n;
  }
}

describe("FizzBuzz", function() {
  it(" check 1 to 1000", function() {
    for (var i=1; i<=1000; i++) {
      assert.equal(fizzbuzz(i), answer(i));
    }
  });
});