/*
Задача. Подсчёт свойств
Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

Тесты
Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps{ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта
*/
//  answer
function countProps(object) {
  let propCount = 0;
  // Change code adove this line
  propCount = Object.keys(object).length;
  // Change code adove this line
  return propCount;
}
