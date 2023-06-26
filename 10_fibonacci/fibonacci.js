const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    }
    let sequence = [1, 1];
    let i = 0;
    if (number <= 2) {
      return sequence[number-1]
    }
    while (sequence.length < number) {
      [a,b] = sequence.slice(-2)
      sequence.push(a+b)
    }
    return sequence[sequence.length-1]
  };
  

// Do not edit below this line
module.exports = fibonacci;
