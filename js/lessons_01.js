
/*Задача 16 
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, our manager will contact you.".
*/
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available < ordered) {message = "Not enough goods in stock!"} else {message = "Order is processed, our manager will contact you."}
  // Change code above this line
  return message;
}
