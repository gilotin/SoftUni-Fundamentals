function addAndRemove(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }

  console.log(result);
}
addAndRemove(2, 8);
