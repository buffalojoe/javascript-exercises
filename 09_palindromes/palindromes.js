const palindromes = function(word) {

    const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    wordArray = word.toLowerCase().split("");
    wordArray = wordArray.filter(letter => letterArray.includes(letter));
    originalWord = wordArray.join("");

    reversedWord = ""
    for (i = originalWord.length - 1; i >= 0; i--) {
        reversedWord += originalWord[i];
    }
    console.log("Reversed word: " + reversedWord)

    if (originalWord == reversedWord) {
        return true;
    } else {
        return false;
    }
};
console.log(palindromes('0402340534Race car'));
// Do not edit below this line
module.exports = palindromes;
