/*
Изменение значения свойства
После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("драма");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["историческая проза", "приключения", "драма"]
Задание
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства price это число 5000
Значение вложенного свойства rating это число 4.7
Значение вложенного свойства name это строка "Henry Sibola"
Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]
*/
// answer
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');
// Change code below this line
