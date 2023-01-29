function factorialDivision(firstNumber, secondNumber) {
   let factorial = (n) => {
    if (n === 0) return 1;
    else return n * factorial(n - 1);
  };

  let result = factorial(firstNumber) / factorial(secondNumber);
  console.log(result.toFixed(2));
}
factorialDivision(7, 2);
