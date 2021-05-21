/*
Задача: чётные числа
Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

Тесты
Объявлена функция getEvenNumbers(start, end)
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
Вызов функции getEvenNumbers(8, 8) возвращает [8]
Вызов функции getEvenNumbers(7, 7) возвращает []
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив
*/
// answer
function getEvenNumbers(start, end) {
  // Change code below this line
  const arrEvenNumber = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arrEvenNumber.push(i);
    }
  }
  return arrEvenNumber;
  // Change code above this line
}
