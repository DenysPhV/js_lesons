const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const copyOfHouses = [...houses];

console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(houses === copyOfHouses); // false - разные ссылки
