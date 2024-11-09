const convertToCelsius = function(fahrenheit) {
  let answer = ((fahrenheit - 32) * (5/9));
  let answerRounded = Math.round(answer);
  if (answer == answerRounded) {
    return answer;
  } else {
    return Number(answer.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let answer = ((celsius * (9/5)) + 32);
  let answerRounded = Math.round(answer);
  if (answer == answerRounded) {
    return answer;
  } else {
    return Number(answer.toFixed(1));
  }
};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
