/*
Задача. Хранилище 2.0
Задание
Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Тесты
Объявлен класс Storage.
Свойство items в классе Storage объявлено приватным.
Конструктор класса принимает свойство items.
Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
У объекта storage нет свойства items.
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].
*/
// answer
//function Storage(items) {
//this.items = items;
//}

//Storage.prototype.getItems = function () {
//return this.items;
//};

//Storage.prototype.addItem = function (newItem) {
//this.items.push(newItem);
//};

//Storage.prototype.removeItem = function (item) {
//const itemIndex = this.items.indexOf(item);
//this.items.splice(itemIndex, 1);
//};
// Рефракторинг конструктора
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(items) {
    const itemIndex = this.#items.indexOf(items);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
