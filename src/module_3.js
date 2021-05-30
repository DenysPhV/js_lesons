/*
Методы объекта
До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.

Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

// ✅ Логиески и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");
Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.

// ❌ Слабосвязанные, независмые сущности
const books = [];
function getBooks() {}
function addBook() {}
Задание
Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

Тесты
Объявлена переменная bookShelf

Значение переменной bookShelf это объект

Значение свойства bookShelf.getBooks это метод объекта

Вызов метода bookShelf.getBooks() возвращает строку "Возвращаем все книги"

Значение свойства bookShelf.addBook это метод объекта

Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"

Значение свойства bookShelf.removeBook это метод объекта

Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"

Значение свойства bookShelf.updateBook это метод объекта

Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"
*/
// answer
const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};
