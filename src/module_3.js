/*
Задача. Удаляем зелье
Задание
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.removePotion это метод объекта
После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]
*/
// answer
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const bookIndex = this.potions.indexOf(potionName);
    this.potions.splice(bookIndex, 1);
  },
};
