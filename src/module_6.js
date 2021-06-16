/*
Задача.Неактивные пользователи
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
*/
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

/*
Задание
Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

Тесты
-Объявлена переменная getInactiveUsers.

Переменной getInactiveUsers присвоена стрелочная функция с параметром users.
Для перебора параметра users используется метод filter().
Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore Hensley, Ross Vazquez и Blackburn Dotson.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/
// answer
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
