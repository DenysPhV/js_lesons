const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName(); // Resort Hotel

hotel.changeCapacity(200);
console.log(hotel.capacity); // 200




