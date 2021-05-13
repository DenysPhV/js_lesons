function getShippingCost(country) {
  let message;
  let price;
  // Change code below this line

  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }

  // Change code above this line
  return message;
}
