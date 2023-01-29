function inventory(data) {
  let CurrInvetory = data.shift().split(", ");
 
  let index = 0;

  let input = data[index];

  index++;

  while (input !== "Craft!") {
    input = input.split(" - ");
    command = input[0];
    craftingMat = input[1];

    switch (command) {
      case "Collect":
        if (!CurrInvetory.includes(craftingMat)) {
          CurrInvetory.push(craftingMat);
        }
         break;
      case "Drop":
        if (CurrInvetory.includes(craftingMat)) {
          let possition = CurrInvetory.indexOf(craftingMat);
          CurrInvetory.splice(possition, 1);
        }
        break;
      case "Combine Items":
        craftingMat = craftingMat.split(":");
        let checkedItem = craftingMat[0];
        let newItem = craftingMat[1];

        if (CurrInvetory.includes(checkedItem)) {
          let itemPlace = CurrInvetory.indexOf(checkedItem);
          CurrInvetory.splice(itemPlace + 1, 0, newItem);
        }
        break;
      case "Renew":
        if(CurrInvetory.includes(craftingMat)){
            let renewedItem = CurrInvetory.indexOf(craftingMat);
            CurrInvetory.splice(renewedItem, 1);
            CurrInvetory.push(craftingMat); 
        }
    }
    input = data[index];
    index++;
  }
  console.log(CurrInvetory.join(', '));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory(["Iron, Sword", "Drop - Bronze", "Combine Items - Sword:Bow", "Renew - Iron", "Craft!"]);
