const fibonacci = function(index) {
    index = Number(index)

    if (index < 0)
        return 'OOPS'
    if (index === 0)
        return 0

    let fibonacciSequence = [1, 1]

    for (let i = 2; i < index; i++) {
        fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2])
    }

    return fibonacciSequence[index - 1]
};

// Do not edit below this line
module.exports = fibonacci;
