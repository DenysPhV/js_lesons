/*
Метод строк split()
Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.*/

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript essentials';
// console.log(message.split(' ')); // ["JavaScript", "essentials"]

/*Задание
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

Тесты
Объявлена функция splitMessage(message, delimeter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split

// answer
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);

  // Change code above this line
  return words;
}
