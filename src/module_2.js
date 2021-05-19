/*
Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
Задание
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

Тесты
Объявлена функция createArrayOfNumbers(min, max)
Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
В цикле for использовался метод push
*/
// answer
