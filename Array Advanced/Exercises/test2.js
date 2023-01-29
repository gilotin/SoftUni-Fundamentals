function sorting(input) {
  let lengthArr = input.slice();
  let sortedArray = [];
  input.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i <= lengthArr.length; i++) {
    let lastNum = input.pop();
    let firstNum = input.shift();

    if (lastNum === undefined) {
      break;
    } else {
      sortedArray.push(lastNum);
    }

    
    if (firstNum === undefined) {
      break;
    } else {
      sortedArray.push(firstNum);
    }
  }

  console.log(sortedArray);
}

sorting([94, 1, 69, 2, 63, 3, 52, 18, 21]);
