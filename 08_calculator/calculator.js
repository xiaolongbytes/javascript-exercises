const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((total, current) => total + current, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => product * current, 1)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	let factorial = 1
  for (let i = number; i > 0; i --) {
    factorial *= i
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
