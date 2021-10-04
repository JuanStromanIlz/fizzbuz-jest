const fizzbuzz = require('./fizzbuzz').fizzbuzz;
const count = require('./fizzbuzz').count;

describe('fizzbuzz', () => {

  test('should print false if they don´t receive a num', () => {
    const expected = false;
    const result = fizzbuzz('1');
    expect(result).toBe(expected);
  });

  test('should print fizz if they receive a num multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(result).toBe(expected);
  });

  test('should print buzz if they receive a num multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(result).toBe(expected);
  });

  test ('should print fizzbuzz if they receive a num multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(result).toBe(expected);
  });

  test('count to 15 and check for a fizzbuzz', () => {
    const contain = '15: fizzbuzz';
    const result = count(15);
    expect(result).toContain(contain);
  });
});