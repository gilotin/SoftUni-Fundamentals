function signCheck(num1, num2, num3) {
  let signCounter = 0;

  if (num1 < 0) {
    signCounter++;
  }
  if (num2 < 0) {
    signCounter++;
  }
  if (num3 < 0) {
    signCounter++;
  }

  if (signCounter % 2 === 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

