function digitsWithWords(string) {
  let setNumber = 0;

  switch (string) {
    case "zero":
      setNumber = 0;
      break;
    case "one":
      setNumber = 1;
      break;
    case "two":
      setNumber = 2;
      break;
    case "three":
      setNumber = 3;
      break;
    case "four":
      setNumber = 4;
      break;
    case "five":
      setNumber = 5;
      break;
    case "six":
      setNumber = 6;
      break;
    case "seven":
      setNumber = 7;
      break;
    case "eight":
      setNumber = 8;
      break;
    case "nine":
      setNumber = 9;
      break;
  }
  console.log(setNumber);
  
}
digitsWithWords("nine");
