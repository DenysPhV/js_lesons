/*
Геттеры и сеттеры
Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.

Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.

class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение. Геттер и сеттер идут в паре и должны называться одинаково.

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com
При обращении к mango.email вызывается геттер get email() {...} и выполняется его код. При попытке записи mango.email = 'mango@supermail.com' вызывается сеттер set email(newEmail) {...} и строка 'mango@supermail.com' будет значением параметра newEmail.

Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

set email(newEmail) {
  if(newEmail === '') {
    console.log('Ошибка! Почта не может быть пустой строкой!');
    return;
  }

  this.#email = newEmail;
}
Задание
Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

Тесты
Объявлен класс Car.
В классе Car объявлено приватное свойство brand.
В классе Car объявлено приватное свойство model.
В классе Car объявлено приватное свойство price.
Конструктор класса принимает объект со свойствами brand, model и price.
В классе Car объявлен геттер brand.
В классе Car объявлен сеттер brand.
В классе Car объявлен геттер model.
В классе Car объявлен сеттер model.
В классе Car объявлен геттер price.
В классе Car объявлен сеттер price.
*/
// answer

// class Car {
//   model;
//   price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.model;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// Рефракторинг
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
