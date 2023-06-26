const palindromes = function(word) {
    characters = word.split("");
    let letters = []
    characters.forEach((character) => {
      if (character.toUpperCase() != character.toLowerCase()) {
        letters.push(character.toLowerCase())
      }
    })
    const reversedLetters = [...letters].reverse().join("")
    const combinedLetters = letters.join("")
    console.log(reversedLetters, combinedLetters)
    return (reversedLetters === combinedLetters)
  };

// Do not edit below this line
module.exports = palindromes;
