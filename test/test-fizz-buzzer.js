// import chai, we are expecting variables
const expect = require('chai').expect;

// import adder
const fizzbuzzer = require('../fizzBuzzer');

// unit tests for `fizzbuzzer` function
describe('fizzbuzzer', function () {

  // test the normal case
  it('Should return fizz-buzz if divisible by 5 and 3 (15)\n' +
    'buzz if divisible by 5 \n' +
    'fizz if divisible by 3', function () {
    const normalCases = [
      {a: 30, expected: 'fizz-buzz'},
      {a: 10, expected: 'buzz'},
      {a: 6, expected: 'fizz'}
    ];

    // for each sets of inputs, fizzbuzzer should produce expected value
    normalCases.forEach(function (input) {
      const answer = fizzbuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function () {
    // range of inputs where it is not a number
    const badInputs = [
      'b',
      true,
      [15, 6],
      function () {}
    ];

    // Prove that an error is raised for bad inputs
    badInputs.forEach(function (input) {
      expect(function () {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });
});