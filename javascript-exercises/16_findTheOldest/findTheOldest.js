const findTheOldest = function (arr) {

    const actualYear = new Date().getFullYear();

    return arr.reduce((prev, current) => {
        let currentAge = current.yearOfDeath ? (current.yearOfDeath - current.yearOfBirth) : (actualYear - current.yearOfBirth);

        if (currentAge > prev.age) {
            return {
                name: current.name,
                age: currentAge,
            };
        }

        return prev;

    }, {
        name: "",
        age: 0,
    })

};

// Do not edit below this line
module.exports = findTheOldest;
