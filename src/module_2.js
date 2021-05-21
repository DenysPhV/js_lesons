/*
Задача: функция includes()
Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

Тесты
Объявлена функция includes(array, value)
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
Вызов includes() для случайного массива со случайным value возвращает верный boolean
В функции includes используется for, return, но не метод массива includes
*/
// answer
function includes(array, value) {
  // Change code below this line

  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
