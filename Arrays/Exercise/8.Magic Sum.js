function magicSum(array, n) {
  let arrLength = array.length;

  for (let i = 0; i < arrLength; i++) {
    for (r = i + 1; r < arrLength; r++) {
      if (array[i] + array[r] === n) {
        console.log(array[i], array[r]);
      }
    }
  }
}
//magicSum([1, 7, 6, 2, 19, 23],8 );
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
