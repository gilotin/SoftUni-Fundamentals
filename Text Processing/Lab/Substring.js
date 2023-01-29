function subString(text, num1, num2) {
    let endIndex = num1 + num2
  let result = text.substring(num1,endIndex)

  console.log(result);
}
subString("ASentence", 1, 8);
subString('SkipWord', 4, 7)
