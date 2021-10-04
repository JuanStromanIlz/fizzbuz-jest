function fizzbuzz(num) {

  const divisible = (num, rest) => num % rest === 0;

  const isNumber = (num) => typeof(num) === 'number';

  if (!isNumber(num)) {
    return false;
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  if (divisible(num, 3)) {
    return 'fizz';
  }
  if (divisible(num, 5)) {
    return 'buzz';
  }
  return num;
}

function count(num) {

  const listOfNumbers = [];

  for (let i = 0; i <= num; i++) {
    listOfNumbers.push(`${i}: ${fizzbuzz(i)}`);
  }
  return listOfNumbers;
}

module.exports = {fizzbuzz, count};
