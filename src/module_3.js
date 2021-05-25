/*
Задача. Поиск объекта по значению свойства
Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

Тесты
Объявлена функция getProductPrice(productName).
Вызов getProductPrice("Radar") возвращает 1300.
Вызов getProductPrice("Grip") возвращает 1200.
Вызов getProductPrice("Scanner") возвращает 2700.
Вызов getProductPrice("Droid") возвращает 400.
Вызов getProductPrice("Engine") возвращает null.
*/
// answer
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    let name = product.name;
    if (productName === name) {
      return product.price;
    }
  }
  return null;
}
