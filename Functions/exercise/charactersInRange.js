function charactersInRange(firstChar, secondChar) {
  let charactersInRange = [];

  let startingChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

  for (let current = startingChar + 1; current < endChar; current++) {
    let currentChar = String.fromCharCode(current);
    charactersInRange.push(currentChar);
  }
  console.log(charactersInRange.join(" "));
}
charactersInRange("a", "d");
