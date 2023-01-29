function shopping(input) {
  let notepad = [];
  let index = 0;
  command = input[index];
  index++;

  while (command !== "Go Shopping") {
    if (command.startsWith("Add")) {
      let place = command.split("->")[1];
      let products = command.split("->")[2].split(",");
      let product = new Set(products)
      notepad[place] = product
    }

    

    command = input[index];
    index++;
  }
  console.log(notepad);
}
shopping([
  "Add->Grocery->Dried-fruit,Nuts,Lemons",
  "Add->Market->Nuts,Juice",
  "Important->Market->Snack",
  "Remove->Market",
  "Go Shopping",
]);
