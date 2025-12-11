const sumAll = function (x, y) {
    if (typeof x !== 'number' || typeof y !== "number") return 'ERROR';
    if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
    if (x < 0 || y < 0) return 'ERROR';
    let sum = 0;
    let smallNum = Math.min(x, y);
    let bigNum = Math.max(x, y);
    for (let i = smallNum; i <= bigNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
