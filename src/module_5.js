/*
Статические свойства
Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

Добавим классу пользователя приватное свойство type - его тип, определяющий набор прав, например администратор, редактор, просто пользователь и т п. Возможные типы пользователей будем хранить как статическое свойство TYPES - объект со свойствами.

Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }

    this.#type = newType;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = User.TYPES.EDITOR;
console.log(mango.type); // editor
Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя свойства должно начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

Задание
Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

Тесты
Объявлен класс Car.
У класса Car есть статическое свойство MAX_PRICE.
Значение статического свойства MAX_PRICE это число 50000.
У экземпляра нет свойства MAX_PRICE.
В классе Car объявлен геттер price.
В классе Car объявлен сеттер price.
У экземпляра класса Car вызов сеттера price, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price.
У экземпляра класса Car вызов сеттера price, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price.
*/
// answer
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE >= newPrice) {
      this.#price = newPrice;
    }
    return;
  }
  // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
