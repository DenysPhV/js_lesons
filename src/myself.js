const key = 'person';
const getKey = function () {
  return 'age';
};

// Computed properties
const object = {
  [key]: 'Mango',
  [getKey()]: 2,
};

console.log(object); // {person: 'Mango', age: 2}
