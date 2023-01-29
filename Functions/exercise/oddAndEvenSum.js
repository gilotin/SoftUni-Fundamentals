function oddAndEvenSum(input) {
  let oddSum = 0;
  let evenSum = 0;

  let inputToString = input.toString();

  for (let char of inputToString) {
    let numFromString = Number(char);

    if (numFromString % 2 === 0) {
      evenSum += numFromString;
    } else {
      oddSum += numFromString;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
