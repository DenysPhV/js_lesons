const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// updateCounter(10, counter.increment); был без бинда
updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement); был без бинда
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);
// =======================================================
// const fn = function () {
//   return 5;
// };
// // Вызов функции
// console.log(fn());
// // обращение к функции
// console.log(fn);
