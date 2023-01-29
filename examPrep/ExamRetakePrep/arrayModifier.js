function arrayMod(input) {
  let array = input.shift().split(" ").map(Number);

  let index = 0;
  while (input[index] !== "end") {
    let [command, tokenOne, tokenTwo] = input[index].split(" ");
    let indexOne = Number(tokenOne);
    let indexTwo = Number(tokenTwo);
    switch (command) {
      case "swap":
        let numA = array[indexOne];
        array[indexOne] = array[indexTwo];
        array[indexTwo] = numA;
        break;
      case "multiply":
        let multiplyNum = array[indexOne] * array[indexTwo];
        array[indexOne] = multiplyNum;
        break;
      case "decrease":
        array = array.map((a, b) => {
          return a - 1;
        });
        break;
    }

    input[index];
    index++;
  }
  console.log(array.join(", "));
}
arrayMod([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
