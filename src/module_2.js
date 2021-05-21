/*
Оператор break vs return в функции
Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}

const result = fn();
console.log("Лог после выхода из функции");
console.lof(`Результат выполнения функции ${result}`);
Задание
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка
не использовала оператор break
не использовала переменную number
Тесты
Объявлена функция findNumber(start, end, divisor)
Вызов findNumber(2, 6, 5) возвращает 5
Вызов findNumber(8, 17, 3) возвращает 9
Вызов findNumber(6, 9, 4) возвращает 8
Вызов findNumber(16, 35, 7) возвращает 21
Вызов findNumber() со случайным набором чисел возвращает верный результат
В цикле for не должен использоваться break для выхода до завершения всех итераций цикла
*/
// answer
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return number;
  // Change code above this line
}
