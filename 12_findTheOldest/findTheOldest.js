const findTheOldest = function(persons) {
    let oldest = {}
    let maxAge = 0
    persons.forEach((person) => {
        if (!person["yearOfDeath"]) {
            person["yearOfDeath"] = new Date().getFullYear()
        }
        let age = person["yearOfDeath"] - person["yearOfBirth"]
        if (age > maxAge) {
            oldest = person;
            maxAge = age;
        }
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
