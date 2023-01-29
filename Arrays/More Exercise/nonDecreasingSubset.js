// function nonDecreasingSubset(array) {
//   let result = [];
//   let biggestNum = array[0];
//   result = array.filter((el) => {
//     if (el >= biggestNum) {
//       biggestNum = el;
//     }
//     return el >= biggestNum;
//   });
//   console.log(result.join(' '));
// }

//ver 2.0

function nonDecreasingSubset(array) {
  let result = [];
  let biggestNum = array[0];

  for (el of array) {
    if (biggestNum <= el) {
      biggestNum = el;
      result.push(biggestNum);
    }
  }
  console.log(result.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
