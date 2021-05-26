/*
Значения по умолчанию
Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // Последнее королевство
console.log(author); // Бернард Корнуэлл
console.log(coverImage); // https://via.placeholder.com/640/480
Задание
В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная yesterday с помощью деструктуризации
Значение переменной yesterday это число 28
Объявлена переменная today с помощью деструктуризации
Значение переменной today это число 26
Объявлена переменная tomorrow с помощью деструктуризации
Значение переменной tomorrow это число 33
Объявлена переменная icon с помощью деструктуризации
Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
Используется деструктуризация объекта
*/
// answer
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;
//const icon = highTemperatures.icon;

const meanTemperature = (yesterday + today + tomorrow) / 3;
