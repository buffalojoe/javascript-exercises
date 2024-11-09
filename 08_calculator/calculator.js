const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let answer = 0;
  for (let num of array) {
    answer += num;
  }
  return answer;
};

const multiply = function(array) {
  let answer = 1;
  for (let num of array) {
    answer *= num;
  }

  return answer;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num1) {
	let answer = 1;

  for (let i = num1; i >= 1; i--) {
    answer *= i;
    console.log(i);
  }

    console.log(answer);
  return answer;
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
