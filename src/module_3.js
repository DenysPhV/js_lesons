/*
Глубокая деструктуризация
Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
Задание
Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

Тесты
Объявлена переменная forecast
Значение переменной forecast это объект
Объявлена переменная highToday с помощью деструктуризации
Значение переменной highToday это число 32
Объявлена переменная lowToday с помощью деструктуризации
Значение переменной lowToday это число 28
Объявлена переменная todayIcon с помощью деструктуризации
Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
Объявлена переменная highTomorrow с помощью деструктуризации
Значение переменной highTomorrow это число 31
Объявлена переменная lowTomorrow с помощью деструктуризации
Значение переменной lowTomorrow это число 27
Объявлена переменная tomorrowIcon с помощью деструктуризации
Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
Используется синтаксис деструктуризации объекта highTemperatures
*/
// answer
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

//const highToday = forecast.today.high;
//const lowToday = forecast.today.low;
//const todayIcon = forecast.today.icon;

//const highTomorrow = forecast.tomorrow.high;
//const lowTomorrow = forecast.tomorrow.low;
//const tomorrowIcon = forecast.tomorrow.icon;
