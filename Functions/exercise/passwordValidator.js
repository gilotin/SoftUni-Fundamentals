function passwordValidator(input) {
  let size = input.length;
  let numbersInPass = 0;
  isTrue = true;
  let specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  for (let i = 0; i < input.length; i++) {
    let currentChar = Number(input[i]);
    if (
      currentChar === 0 ||
      currentChar === 1 ||
      currentChar === 2 ||
      currentChar === 3 ||
      currentChar === 4 ||
      currentChar === 5 ||
      currentChar === 6 ||
      currentChar === 7 ||
      currentChar === 8 ||
      currentChar === 9
    ) {
      numbersInPass++;
    }
  }
  if (size < 6 || size > 10) {
    isTrue = false;
    console.log("Password must be between 6 and 10 characters");
  }
  if (specialChars.test(input)) {
    isTrue = false;
    console.log("Password must consist only of letters and digits");
  }
  if (numbersInPass < 2) {
    isTrue = false;
    console.log("Password must have at least 2 digits");
  }
  if (isTrue) {
    console.log("Password is valid");
  }
}
//passwordValidator("logIn");
passwordValidator("MyPass123");
//passwordValidator('Pa$s$s');
