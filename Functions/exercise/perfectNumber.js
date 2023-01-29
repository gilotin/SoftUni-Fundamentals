function perfectNumber(number) {
  let sumOfDivisitors = 0

  for (let currentNum = 1; currentNum < number; currentNum++) {
    if (number % currentNum === 0) {
      sumOfDivisitors += currentNum;
    }
  }
  let result = (sumOfDivisitors === number) ? "We have a perfect number!" : "It's not so perfect.";
  console.log(result);
}
perfectNumber(1236498);
