const palindromes = function (word) {
    const formatedWord = word.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseWord = Array.from(formatedWord).reverse().join('');
    return formatedWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
