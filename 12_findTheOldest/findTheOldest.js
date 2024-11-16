const findTheOldest = function(objectArray) {
    
    let oldestName = "";
    let oldestAge = 0;
    let oldestPerson = {};
    let currentYear = new Date().getFullYear();
    
    for (let item of objectArray) {

        if (item.yearOfDeath === undefined) {
            if (currentYear - item.yearOfBirth > oldestAge) {              
                oldestAge = (currentYear - item.yearOfBirth);
                oldestName = item.name;
                oldestPerson = item;
                continue;
            } else {
                continue;
            }
        }

        if ((item.yearOfDeath - item.yearOfBirth) > oldestAge) {
            oldestAge = (item.yearOfDeath - item.yearOfBirth);
            oldestName = item.name;
            oldestPerson = item;
            continue;
        } else {
            continue;
        }
    }

    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
