// объявление объекта { ключ:значения }
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];

console.log(book);
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
