/**
 Свой порядок сортировки строк
Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

firstString.localeCompare(secondString)
Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'a'.localeCompare('a'); // 0
'b'.localeCompare('b'); // 0
Возвращает отрицательное значение если firstString должна быть перед secondString.
Возвращает положительное значение больше нуля если firstString должна быть после secondString.
Если строки одинаковы, возвращается ноль.
Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
Задание
Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

Тесты
Объявлена переменная authors.
Значение переменной authors это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский', 'Говард Лавкрафт'].
Объявлена переменная authorsInAlphabetOrder.
Значение переменной authorsInAlphabetOrder это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
Объявлена переменная authorsInReversedOrder.
Значение переменной authorsInReversedOrder это массив ['Федор Достоевский', 'Роберт Шекли', 'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].
Использован метод sort().
 */
// answer
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт',
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((firstAuthor, secondAuthor) =>
  firstAuthor.localeCompare(secondAuthor),
);

const authorsInReversedOrder = [...authors].sort((firstAuthor, secondAuthor) =>
  secondAuthor.localeCompare(firstAuthor),
);
