/*
Прототип объекта и метод Object.create()
Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.
const animal = {
  legs: 4
};
const dog = Object.create(animal);
dog.name = 'Манго';
console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'
console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4
Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.
То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.
Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.
Задание
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
Тесты
Объявлена переменная parent.
Значение переменной parent это объект.
Вызов parent.hasOwnProperty('surname') возвращает true.
Вызов parent.hasOwnProperty('heritage') возвращает true.
Объявлена переменная child.
Значение переменной child это объект.
Вызов child.hasOwnProperty('name') возвращает true.
Обращение к child.name возвращает 'Jason'.
Вызов child.hasOwnProperty('age') возвращает true.
Обращение к child.age возвращает 27.
Вызов child.hasOwnProperty('surname') возвращает false.
Обращение к child.surname возвращает 'Moore'.
Вызов child.hasOwnProperty('heritage') возвращает false.
Обращение к child.heritage возвращает 'Irish'.
Вызов parent.isPrototypeOf(child) возвращает true.
Используется метод Object.create().
*/
// answer
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;
