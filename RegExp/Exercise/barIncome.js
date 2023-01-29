function barIncome(data) {
  let pattern =
    /%(?<name>[A-Z][a-z]*)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.*[0-9]*)\$/gm;

  let text = data.join("-");

  let current = pattern.exec(text);
  let totalIncome = 0;

  while (current) {
    let name = current.groups.name;
    let product = current.groups.product;
    let count = Number(current.groups.count);
    let price = Number(current.groups.price);

    let totalPrice = count * price;

    totalIncome += totalPrice;
    console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);

    current = pattern.exec(text);
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
