function processOddNumbers(numbers) {
  let filterElements = numbers.filter((el, i) => i % 2 === 1);
  let doubleNumbers = filterElements.map((x) => x * 2);
  let reversedNum = doubleNumbers.reverse();
  console.log(reversedNum.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
