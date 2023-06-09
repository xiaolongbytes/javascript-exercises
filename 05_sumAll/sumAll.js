const sumAll = function(num1, num2) {
    const minLimit = Math.min(num1, num2);
    const maxLimit = Math.max(num1, num2)
    sum = 0;
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    for (let i = minLimit; i <= maxLimit; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
