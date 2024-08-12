const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => (total + currentValue), 0)
};

const multiply = function(arr) {
	return arr.reduce((total, currentValue) => total * currentValue)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(numb) {
  if (numb === 0)
    return 1
  else
	  return numb * factorial(numb - 1)
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
