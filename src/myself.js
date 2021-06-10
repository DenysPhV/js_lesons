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

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true
