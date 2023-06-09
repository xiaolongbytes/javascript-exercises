const repeatString = function(text, times) {
    if (times >= 0) {
        return text.repeat(times)
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
