/*
Метод forEach(callback)
Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.
массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.
const numbers = [5, 10, 15, 20, 25];
// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}
// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.
Задание
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
Тесты
Объявлена функция calculateTotalPrice(orderedItems).
Для перебора массива orderedItems использован метод forEach.
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/
// answer
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  //for (let i = 0; i < orderedItems.length; i += 1) {
  //totalPrice += orderedItems[i];
  //}

  orderedItems.forEach(orderedItems => {
    totalPrice += orderedItems;
  });

  // Пиши код выше этой строки
  return totalPrice;
}
