function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;

    case 'starter': // Change this line
      price = 0; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
