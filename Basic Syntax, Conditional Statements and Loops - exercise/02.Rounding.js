function solve(num1, num2) {
  if (num2 > 15) {
    num2 = 15;
  }

  let roundedNum = num1.toFixed(num2);
  console.log(parseFloat(roundedNum));
}
solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);
