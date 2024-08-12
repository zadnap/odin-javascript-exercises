const palindromes = function (str) {
    let refinedString = removeSpacesAndPunctuations(str)
    return refinedString === refinedString.split('').reverse().join('')
};

function removeSpacesAndPunctuations(str) {
    return str.replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase()
}

// Do not edit below this line
module.exports = palindromes;
