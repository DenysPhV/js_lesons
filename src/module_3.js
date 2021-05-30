/*
Доступ к свойствам объекта в его методах
Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

const bookShelf = {
  books: ["Последнее королевство"],
  getBooks() {
    console.log(this);
  },
};

// Перед точкой стоит объект bookShelf,
// поэтому при вызове метода, this будет хранить ссылку на него.
bookShelf.getBooks(); // {books: ["Последнее королевство"], getBooks: f}
Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

const bookShelf = {
  books: ["Последнее королевство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // []
bookShelf.addBook("Мгла");
bookShelf.addBook("Страж снов");
console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
bookShelf.removeBook("Мгла");
console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]
Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.

Задание
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

Тесты
Объявлена переменная bookShelf

Значение переменной bookShelf это объект

Значение свойства bookShelf.updateBook это метод объекта

После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]
*/
// answer
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};
