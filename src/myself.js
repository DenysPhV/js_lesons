const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

//доступ к свойствам
//          object.key
console.log(hotel.name); // Resort Hotel
//          object.key
console.log(hotel['name']); // Resort Hotel

hotel.name = 'Coastline Resort';
console.log(hotel.name); // Coastline Resort
console.log(hotel['name']); // Coastline Resort

hotel['name'] = 'Stardust Hotel';
console.log(hotel.name); // Stardust Hotel
console.log(hotel['name']); // Stardust Hotel
