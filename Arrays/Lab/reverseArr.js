function reverseArr(arr) {
  let k = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++, k--) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  console.log(arr.join(" "));
}
reverseArr(["a", "b", "c", "d", "e"]);
