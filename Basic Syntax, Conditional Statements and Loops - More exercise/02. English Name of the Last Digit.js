function lastNames(input) {
  let array = [];

  array = input.toString().split("");

  let lastNum = array.pop();

  if (lastNum === "1") {
    return "one";
  } else if (lastNum === "2") {
    return "two";
  } else if (lastNum === "3") {
    return "three";
  } else if (lastNum === "4") {
    return "four";
  } else if (lastNum === "5") {
    return "five";
  } else if (lastNum === "6") {
    return "six";
  } else if (lastNum === "7") {
    return "seven";
  } else if (lastNum === "8") {
    return "eigth";
  } else if (lastNum === "9") {
    return "nine";
  } else {
    return "zero";
  }
}
console.log(lastNames(512));
