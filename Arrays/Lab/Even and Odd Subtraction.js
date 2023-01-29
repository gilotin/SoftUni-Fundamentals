function evenAndOddSubstraction(numbers) {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  let substraction = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      sumOfEven += numbers[i];
    } else {
      sumOfOdd += numbers[i];
    }
  }
  substraction = sumOfEven - sumOfOdd;
  console.log(substraction);
}

evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);
