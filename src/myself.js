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

//  Код более декларативный
// const numbers = [1, 2, 3];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функциональный forEach
// numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// =============================================================================
/* Напиши скрипт поиска логина
-Если логина нет, вывести сщщбщение "Пользователь [логин] не найден"
-Если нашли логин, выввести сщщбщение "Пользователь [логин] найден"

- Сначала через for
- Потом через for of
- логика break
- Метод includes() с тернарным оператором
*/

// const logins = ['gdtrujdfhh', ';lkgorkrkr', 'nchsydgw46', 'bnlrpekk'];
// const loginToFind = ';lkgorkrkr';

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
// }

// const changeWords = str => {
//   let word = '';
//   const separate = str.split(' ');

//   for (let i = 0; i <= separate.length - 1; i += 1) {
//     // console.log(arrWord[i].length >= 5);
//     if (word) word += ' ';
//     if (separate[i].length >= 5) {
//       word += separate[i].split('').reverse().join('');
//     } else {
//       word += separate[i];
//     }
//   }
//   // console.log(word);
//   return word;
// };

// const changeWords = str =>
//   str
//     .split(/\s+/)
//     .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
//     .join(' ');

// changeWords('Hey fellow interns'); //=> returns Hey wollef snretni
// changeWords('This is a test'); //This is a test
// changeWords('This is another test'); //This is rehtona test

// function calculateDiscount(years, paymentMethod, returnedOrder) {
//   let discount = 0;
//   if (years >= 1) {
//     if (returnedOrder) {
//       discount = 0;
//       return discount;
//     }
//     if (paymentMethod === 'MasterCard') {
//       discount = 0.1;
//     }
//     if (getCustomerBirthdayDate() === getCurrentDate()) {
//       discount = 0.5;
//     }
//   }
//   return discount;
// }
//years - кількість років, з тих пір, як користувач зробив першу покупку
//paymentMethod - зберігає значення типу оплати
//returnedOrder - зберігає в собі інформацію про те, чи був товар повернутий раніше тим самим покупцем
//getCustomerBirthdayDate - внутрішня функція. Повертає дату народження кастомера
//getCurrentDate - внутрішня функція. Повертає поточну дату
