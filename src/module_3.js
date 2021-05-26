/*
Деструктуризация объектов
Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публичном" : "закрытом";
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте их использования менее «шумным».

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.

Задание
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная yesterday с помощью деструктуризации
Значение переменной yesterday это число 28
Объявлена переменная today с помощью деструктуризации
Значение переменной today это число 26
Объявлена переменная tomorrow с помощью деструктуризации
Значение переменной tomorrow это число 33
Объявлена переменная meanTemperature
Значение переменной meanTemperature это число 29
Используется синтаксис деструктуризации объекта highTemperatures
*/
// answer
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;
const meanTemperature = (yesterday + today + tomorrow) / 3;
