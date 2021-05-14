var fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
var citrus = fruits.slice(1, 3);

console.log(citrus);

// Используя slice, создаём newCar из myCar.
var myHonda = { color: 'красный', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'в хорошем состоянии', 'приобретена в 1997'];
var newCar = myCar.slice(0, 2);

// Отображаем значения myCar, newCar и цвет myHonda
//  по ссылкам из обоих массивов.
// console.log('myCar = ' + myCar.toSource());
// console.log('newCar = ' + newCar.toSource());
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Изменяем цвет myHonda.
myHonda.color = 'багровый';
console.log('Новый цвет моей Honda - ' + myHonda.color);

// Отображаем цвет myHonda по ссылкам из обоих массивов.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);
