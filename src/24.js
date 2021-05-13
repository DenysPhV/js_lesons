function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (50000 <= totalSpent) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && 20000 < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && 5000 < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}
