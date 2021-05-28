<<<<<<< Updated upstream
const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const copyOfHouses = [...houses];

console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(houses === copyOfHouses); // false - разные ссылки
=======
const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(`Red: ${red}, Colors: ${colors}`);
// Red: 200, Colors: [255, 100]
>>>>>>> Stashed changes
