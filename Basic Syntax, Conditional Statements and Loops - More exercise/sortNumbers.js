function sortNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    let printNum1 = num1 + "\n";
    console.log(printNum1);
  }else if (num2 > num1 && num2 > num3) {
    let printNum2 = num2 + "\n";
    console.log(printNum2);
  }else if (num3 > num1 && num3 > num2) {
    let printNum3 = num3 + "\n";
    console.log(printNum3);
  }
  
}
sortNumbers(2, 1, 3);


// ver 2

function lastNames(firstNum, secondNum, thirdNum) {
  let array = [];


array.push(firstNum, secondNum, thirdNum);
array = array.sort((a,b) => {
  return b - a;
});
console.log(array.join('\n'));
}
lastNames(2, 1, 3);
