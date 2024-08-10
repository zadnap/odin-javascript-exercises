const repeatString = function(string, time) {
    if (time < 0) {
        return "ERROR"
    }
    let finalString = ''
    for (let i = 0; i < time; i++) {
        finalString = finalString.concat(string)
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
