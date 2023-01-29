function censoredWords(string, word) {
  let wordCount = word.length;
  let censor = "*".repeat(wordCount);

  result = string.replace(word, censor);

  while(result.indexOf(word) >= 0) {
    result = result.replace(word, censor);
  }
  console.log(result);
}
censoredWords("A * sentence with  *", "*");
