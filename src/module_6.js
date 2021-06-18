/**
Цепочки методов (чейнинг, chaining)
Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
  { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
  { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
];
Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.

Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод будет выполняться на результате работы предыдущего.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
Делаем копию исходного массива перед сортировкой.
На копии вызываем метод sort().
К результату работы метода sort() применяем метод map().
Переменной names присваивается результат работы метода map().
Получим сортированный по алфавиту массив уникальных посещаемых предметов.

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']
На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
На результате метода filter() вызываем sort().
Переменной uniqueSortedCourses присваивается результат работы метода sort().
Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода, это дополнительный перебор массива, что при достаточном количестве, может сказаться на производительности.

Задание
Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

Тесты
Объявлена переменная books.
Значение переменной books это исходный массив объектов.
Объявлена переменная MIN_BOOK_RATING.
Значение переменной MIN_BOOK_RATING это число 8.
Объявлена переменная names.
Значение переменной names это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли'].
Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
Используется цепочка методов filter, map, sort.
 */
// answer
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
