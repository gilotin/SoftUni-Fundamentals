function shoppingList(data) {
  let productList = data.shift().split("!");
  let index = 0;
  let command = data[index];

  index++;

  while (command !== "Go Shopping!") {
    command = command.split(" ");
    console.log(command)
    let action = command[0];
    console.log(action)

    let item = command[1];
    let correctItem = command[2];
    switch (action) {
      case "Urgent":
        if (productList.includes(item)) {
          command = data[index];
          index++;
          continue;
        } else {
          productList.unshift(item);
        }
        break;
      case "Unnecessary":
        if (productList.includes(item)) {
          productList.splice(productList.indexOf(item), 1);
        } else {
          command = data[index];
          index++;
          continue;
        }
        break;
      case "Correct":
        if (productList.includes(item)) {
          productList.splice(productList.indexOf(item), 1, correctItem);
        }
        break;
      case "Rearrange":
        if (productList.includes(item)) {
          productList.push(productList.splice(productList.indexOf(item),1));
        }
        break;
    }

    command = data[index];
    index++;
  }
  console.log(productList.join(", "));
}
//shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList([

  "Grapes!Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
