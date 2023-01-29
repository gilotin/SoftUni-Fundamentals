function bombNumbers(input, specialNumbers) {
  let bombNumber = specialNumbers[0];
  let power = specialNumbers[1];

  while (input.includes(bombNumber)) {
    let index = input.indexOf(bombNumber);
    let bombRadius = power * 2 + 1;
    let startIndex = index - power;

    if (startIndex < 0) {
      bombRadius +=startIndex;
      startIndex = 0;
    }
    input.splice(startIndex, bombRadius);
  }

  let sum = input.reduce((x, y) => x + y, 0);
  console.log(sum);
}
bombNumbers([1, 9, 4, 2, 8, 4, 1], [9, 3]);
