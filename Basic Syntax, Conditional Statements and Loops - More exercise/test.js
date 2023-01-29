function sortNumbers(num1, num2, num3) {
  let printNum1 = num1;
  let printNum2 = num2;
  let printNum3 = num3;
 
  if (num1 > num2 && num1 > num3) {
    console.log(printNum1);
    if (num2 > num3) {
      console.log(printNum2);
      console.log(printNum3);
    } else {
      console.log(printNum3);
      console.log(printNum2);
    }
  }
  if (num2 > num1 && num2 > num3) {
    console.log(printNum2);
    if (num1 > num3) {
      console.log(printNum1);
      console.log(printNum3);
    } else {
      console.log(printNum3);
      console.log(printNum1);
    }
  }
  if (num3 > num1 && num3 > num2) {
    console.log(printNum3);
    if (num1 > num2) {
      console.log(printNum1);
      console.log(printNum2);
    } else {
      console.log(printNum2);
      console.log(printNum1);
    }
  }
}
sortNumbers(2, 1, 3);
