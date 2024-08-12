const findTheOldest = function(array) {
    const sortedByAge = array.sort((person1, person2) => {
        const currentYear = new Date().getFullYear()
        const person1Age = (person1.yearOfDeath || currentYear) - person1.yearOfBirth
        const person2Age = (person2.yearOfDeath || currentYear) - person2.yearOfBirth

        return person1Age - person2Age
    })
    return sortedByAge[sortedByAge.length - 1]
};

findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1066,
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
  ])

// Do not edit below this line
module.exports = findTheOldest;
