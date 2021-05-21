/*
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

*/
const array1 = [1, 2, 3];
const array2 = [10, 2, 30, 40];

function getCommonElements(array1, array2) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; i <= array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }

  return newArray;
  // Change code above this line
}

// console.log(array1);
// console.log(array2);
// console.log(array1.includes(2));
// console.log(array2.includes(2));
// getCommonElements([1, 2, 3], [10, 20, 30]);
