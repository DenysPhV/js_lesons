/*
Цикл for...of
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
Задание
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice([]) возвращает 0
Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму
*/
// answer
function calculateTotalPrice(order) {
  let total = 0;

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

  for (const sum of order) {
    total += sum;
  }

  return total;
}
