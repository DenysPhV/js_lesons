/*
Метод hasOwnProperty()
Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.

// ❌ Возвращает true для всех свойств
console.log('name' in dog); // true
console.log('legs' in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}
Задание
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

Тесты
Объявлена переменная advert.
Значение переменной advert это объект.
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Объявлена переменная values.
Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].
*/
// answer
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code above this line
}
