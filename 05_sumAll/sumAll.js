const sumAll = function(numb1, numb2) {
    let sum = 0
    if (numb1 < 0 || numb2 < 0 || !Number.isInteger(numb1) || !Number.isInteger(numb2)) 
        return "ERROR"
    if (numb1 < numb2) {
        for (i = numb1; i <= numb2; i++) {
            sum += i
        }
    }
    else if (numb1 > numb2) {
        for (i = numb2; i <= numb1; i++) {
            sum += i
        }
    }
    else {
        sum = numb1
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
