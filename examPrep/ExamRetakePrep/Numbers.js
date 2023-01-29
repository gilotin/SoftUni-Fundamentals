function numbers(input) {
  let finialResult = [];
  let numbers = input
    .split(" ")
    .map(Number)
    .sort((a, b) => {
      return b - a;
    });

  let avgNum =
    numbers.reduce((a, b) => {
      return a + b;
    }) / numbers.length;

  for (let i = 0; i < 5; i++) {
    if (numbers[i] > avgNum) {
      finialResult.push(numbers[i]);
    } else {
      continue;
    }
  }
  if (finialResult.length > 0) {
    console.log(finialResult.join(" "));
  } else {
    console.log("No");
  }
}
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
