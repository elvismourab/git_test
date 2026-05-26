const findTheOldest = function (arr) {

    const actualYear = new Date().getFullYear();

    return arr.reduce((prev, current) => {
        const prevAge = (prev.yearOfDeath ?? actualYear) - prev.yearOfBirth;
        const currentAge = (current.yearOfDeath ?? actualYear) - current.yearOfBirth;

        if (currentAge > prevAge) {
            return current;
        }

        return prev;

    })

};

// Do not edit below this line
module.exports = findTheOldest;
