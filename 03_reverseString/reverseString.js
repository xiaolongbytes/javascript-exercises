const reverseString = function(text) {
    let reversedText = ''
    for (const letter of text) {
        reversedText = letter + reversedText
    }
    return reversedText
};

// Do not edit below this line
module.exports = reverseString;
