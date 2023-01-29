function maxNumber(array) {
  let newArray = [];
  let isBiger = true;
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let maxNum = array[i];

    if (i + 1 === array.length) {
      newArray.push(maxNum);
      break;
    }
    for (let j = i + 1; j < arrayL; j++) {
      if (array[i] > array[j]) {
        isBiger = true;
      } else {
        isBiger = false;
        break;
      }
    }
    if (isBiger) {
      newArray.push(maxNum);
    }
  }
  console.log(newArray.join(" "));
}
