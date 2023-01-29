function equalSums(array) {
  let indexFound = "no";
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let lSum = 0;
    let rSum = 0;

    for (let left = 0; left < i; left++) {
      lSum += array[left];
    }
    for (let right = i + 1; right < arrayL; right++) {
      rSum += array[right];
    }
    if (lSum === rSum) {
      indexFound = i;
    }
  }
  console.log(indexFound);
}
