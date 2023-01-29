function addAndSubstract(array) {
  let originalArrSum = 0;
  let sumOfModdedArr = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    originalArrSum += array[i];
    if (array[i] % 2 === 0) {
      array[i] += i;
      sumOfModdedArr += array[i];
    } else {
      array[i] -= i;
      sumOfModdedArr += array[i];
    }
  }
  console.log(array);
  console.log(originalArrSum);
  console.log(sumOfModdedArr);
}
