/*
Конструктор дочернего класса
Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

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

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
Задание
Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

Тесты
Объявлен класс Admin.
Класс Admin наследует от класса User.
У класса Admin есть публичное статическое свойство AccessLevel.
У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}.
У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса.
Обращение к Admin.AccessLevel.BASIC возвращает строку 'basic'.
Обращение к Admin.AccessLevel.SUPERUSER возвращает строку 'superuser'.
У класса Admin есть публичное свойство accessLevel.
*/
// answer
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
  accessLevel;

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
