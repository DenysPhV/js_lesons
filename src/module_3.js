/*
Метод Object.keys()
У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.

Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

Тесты
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Значение переменной keys получено с помощью метода Object.keys().
Объявлена переменная values.
Значение переменной values это массив ['Spacious apartment in the city centre', 4, 2153].
Значение переменной values получено с помощью цикла for...of.

*/
// answer
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}
