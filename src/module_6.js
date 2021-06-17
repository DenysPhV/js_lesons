/**
Свой порядок сортировки чисел
Для указания своего порядка сортировки методу sort(callback) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

массив.sort((firstEl, secondEl) => {
  // Тело коллбек-функции
});
firstEl - первый элемент для сравнения.
secondEl - второй элемент для сравнения.
Если вызов compareFunction(firstEl, secondEl) возвращает любое отрицательное значение, то есть firstEl меньше secondEl, сортировка поставит firstEl перед secondEl. Это сортировка по возрастанию.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля, то есть secondEl больше firstEl, сортировка поставит secondEl перед firstEl. Это сортировка по убыванию.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
Eсли вызов compareFunction(firstEl, secondEl) вернёт 0, сортировка оставит firstEl и secondEl неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

Задание
Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

Тесты
Объявлена переменная releaseDates.
Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
Объявлена переменная ascendingReleaseDates.
Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
Объявлена переменная descendingReleaseDates.
Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].
Использован метод sort().
 */
// answer
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => firstEl - secondEl);

const descendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => secondEl - firstEl);
