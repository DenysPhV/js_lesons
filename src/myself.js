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
  low: lowToday,
  high,
  icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
} = forecast;
