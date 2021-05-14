/*Задание 2
Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации
*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
  // Change code above this line
}
//=============================================================
// Ответ
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (ADMIN_PASSWORD === password) {
    return 'Welcome!';
  }

  return 'Access denied, wrong password!';
  // Change code above this line
}
//=============================================================

//=============================================================

//=============================================================

//=============================================================

//=============================================================

//=============================================================
