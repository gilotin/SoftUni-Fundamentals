function solve(num1) {
  if (num1 % 10 === 0) {
    console.log("The number is divisible by 10");
  } else if (num1 % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (num1 % 6 === 0) {
    console.log("The number is divisible by 6");
  } else if (num1 % 3 === 0) {
    console.log("The number is divisible by 3");
  } else if (num1 % 2 === 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}

solve(30);
