/*
Вычисляемые свойства
Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.

const propName = "name";
const user = {
  age: 25
};

user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"
Задание
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

Тесты
Объявлена переменная credentials
Значение переменной credentials это объект
В объекте credentials есть свойство email
Значение вложенного свойства email это строка "henry.carter@aptmail.com"
В объекте credentials есть свойство password
Значение вложенного свойства password это строка "jqueryismyjam"
*/
// answer
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  // Change code above this line
};
