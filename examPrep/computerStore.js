function computerStore(data) {
  let index = 0;
  let command = data[index];
  index++;
  let price = 0;

  while (command !== "regular") {
    if (command === "special") {
      break;
    }

    let partPrice = Number(command);
    if (partPrice < 0) {
      console.log("Invalid price!");
      command = data[index];
      index++;
      continue;
    }
    price += partPrice;
    command = data[index];
    index++;
  }
  let tax = price * 1.2 - price;
  let totalPrice = price + tax;
  if (command === "special") {
    totalPrice *= 0.9;
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(
    `Congratulations you've just bought a new computer!
    Price without taxes: ${price.toFixed(2)}$
    Taxes: ${tax.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$
    `);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
