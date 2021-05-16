/*
## задача 18

Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для
отдела продаж.

Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по
продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения
которых будут задаваться во время её вызова:

pricePerDroid - цена одного дроида orderedQuantity - кол-во заказанных дроидов customerCredits -
сумма средств на счету клиента Дополни её следующим функционалом:

Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой
суммы. Добавь проверку сможет ли клиент оплатить заказ: если сумма к оплате превышает количество
кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!"; в противном
случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered
<число> droids, you have <число> credits left".

*/

//18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;

  if (customerCredits < totalPrice) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}
