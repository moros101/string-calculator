const { add } = require('../src/stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when one number is provided', () => {
    expect(add("1")).toBe(1);
});

test('multiple comma separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines', () => {
    expect(add("1\n2,3")).toBe(6);
});
  
  
  
