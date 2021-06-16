// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };
// // ====как работает bind
// const updateCounter = function (value, operation) {
//   operation(value);
// };

// // updateCounter(10, counter.increment); был без бинда
// updateCounter(10, counter.increment.bind(counter));
// // updateCounter(5, counter.decrement); был без бинда
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);
// ========= вызов и обращение к функции ===================
// const fn = function () {
//   return 5;
// };
// // Вызов функции
// console.log(fn());
// // обращение к функции
// console.log(fn);
// =========================================================

// ================ callback начало ======================
// callback
// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback();
// };

// const fnB = function () {
//   console.log('Это лог при вызове fnB');
// };
// fnA('qwqeqe', fnB);

// ============================================================================
// Математика как пример это синтаксис функции обратного вызова
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// ==================================================
//в переменные мы пишем функции тогда когда хотим их переиспользывать много раз
// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// const mul = function (x, y) {
//   return x * y;
// };

// doMath(2, 6, add);
// doMath(100, 48, sub);
// doMath(6, 5, mul);
// =================================================
// Используем литерал функции, анонимные функции, INLINE функция. И можно передавать сколько угодно значений.

// doMath(2, 6, function (x, y) {
//   return x + y;
// });

// doMath(100, 48, function (x, y) {
//   return x - y;
// });

// doMath(6, 5, function (x, y) {
//   return x * y;
// });
// ===================================================

// ======   Отложенный вызов регистрация событий =====
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('Клик по кнопке' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// мщжно записать коротко инлайн, убрав переменную.

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//   console.log('Клик по кнопке' + Date.now());
// });

// Наследование и запуск кролика
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит.`);
//   }
// }

// let animal = new Animal('Мой питомец');

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }

//   stop() {
//     super.stop(); // вызываем родительский метод stop
//     this.hide(); // и затем hide
//   }
// }

// let rabbit = new Rabbit('Мой кролик');
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); // [4, 5]

/**
 * Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не мутируя исходный.
//  */
// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }

//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

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

const getFriends = users => {
  return users.filter(user => user.friends);
};
