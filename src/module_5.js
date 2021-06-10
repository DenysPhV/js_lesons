/*
Методы класса
В функции-конструкторе объявление методов для работы со свойствами экземпляра делается явно, путём обращения к свойству prototype и добавления на него методов.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

User.prototype.getEmail = function () {
  return this.email;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};
В классах используется более удобный синтаксис методов класса, который за ширмой делает тоже самое - добавляет методы на свойство User.prototype. Поэтому в самом начале мы говорили что классы это просто синтаксический сахар - удобная надстройка над функциями-конструкторами.

class User {
  constructor({ name, breed }) {
    this.name = name;
    this.breed = breed;
  }

  // Аналог User.prototype.getEmail
  getEmail() {
    return this.email;
  }

  // Аналог User.prototype.changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
Задание
Добавь классу Car две метода.

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
Тесты
Объявлен класс Car.
Конструктор класса принимает объект со свойствами brand, model и price.
Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
Значение Car.prototype.getPrice это функция.
Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
Значение Car.prototype.changePrice это функция.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.
*/
// answer
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}
