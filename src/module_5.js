/*
Задача. Цепочка прототипов
Задание
Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
Тесты
Объявлена переменная ancestor.
Значение переменной ancestor это объект.
Объявлена переменная parent.
Значение переменной parent это объект.
Объявлена переменная child.
Значение переменной child это объект.
Вызов parent.isPrototypeOf(child) возвращает true.
Обращение к parent.surname возвращает 'Moore'.
Обращение к parent.heritage возвращает 'Irish'.
Вызов parent.hasOwnProperty('surname') возвращает true.
Вызов parent.hasOwnProperty('heritage') возвращает false.
Вызов ancestor.isPrototypeOf(parent) возвращает true.
Вызов child.hasOwnProperty('surname') возвращает false.
Обращение к child.surname возвращает 'Moore'.
Обращение к child.heritage возвращает 'Irish'.
Вызов child.hasOwnProperty('heritage') возвращает false.
Обращение к ancestor.heritage возвращает 'Irish'.
Вызов ancestor.hasOwnProperty('surname') возвращает true.
Вызов ancestor.hasOwnProperty('heritage') возвращает true.
Обращение к ancestor.surname возвращает 'Dawson'.
Используется метод Object.create().
*/
// answer
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки
