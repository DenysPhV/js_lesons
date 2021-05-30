/*
Задача. Обновляем зелье
Задание
Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.updatePotionName это метод объекта
После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив `["Speed potion", "Polymorth", "Invisibility"]``
*/
// answer
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const bookIndex = this.potions.indexOf(oldName);
    this.potions.splice(bookIndex, 1, newName);
  },
};
