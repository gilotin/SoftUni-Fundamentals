function maxSequence(array) {
  let newArray = [];
  let arrLength = array.length;

  for (i = 0; i < arrLength; i++) {
    let element = [];
    for (r = i; r < arrLength; r++) {
      if (array[i] === array[r]) {
        element.push(array[i]);
      } else {
        break;
      }
      if (element.length > newArray.length) {
        newArray = element;
      }
    }
  }
  console.log(newArray.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
