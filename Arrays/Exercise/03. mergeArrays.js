function mergeArr(arr1, arr2) {
  let finalElement = [];

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      finalElement.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      finalElement.push(arr1[i] + arr2[i]);
    }
  }
  console.log(finalElement.join(" - "));
}
