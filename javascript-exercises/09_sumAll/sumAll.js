const sumAll = function (x, y) {
    if (x < 0 || y < 0) return 'ERROR';
    if (typeof x !== 'number' || typeof y !== "number") return 'ERROR';
    if (!Number.isInteger(x) || !Number.isInteger) return 'ERROR';
    let sum = 0;
    let smallNum = (x < y) ? x : y;
    let bigNum = (x > y) ? x : y;
    for (let i = smallNum; i <= bigNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
