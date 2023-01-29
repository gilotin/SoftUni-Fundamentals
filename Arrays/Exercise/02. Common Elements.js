function commonElements(array1, array2) {
  for (const el1 of array1) {
    for (const el2 of array2) {
      if (el1 === el2) {
        console.log(el1);
      }
    }
  }
}
