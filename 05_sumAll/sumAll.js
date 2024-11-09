const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 <0 || 
        typeof(num1) !== "number" || typeof(num2) !== "number" ||
        num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }

    let numArray = [num1, num2];
    numArray.sort();
    let sum = 0;

    for (i = numArray[0]; i <= numArray[1]; i++) {
        sum += i;
    }

    console.log(sum);
    return sum;
};

sumAll(1, 3);

// Do not edit below this line
module.exports = sumAll;
