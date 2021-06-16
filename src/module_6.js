/*
Задача. Пользователи с цветом глаз
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
Задание
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

Тесты
Объявлена переменная getUsersWithEyeColor.
Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
Для перебора параметра users используется метод filter().
Если значение параметра color это 'blue', функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr.
Если значение параметра color это 'green', функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head.
Если значение параметра color это 'brown', функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony.
Если значение параметра color это любая другая строка, функция возвращает пустой массив.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/
// answer
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
