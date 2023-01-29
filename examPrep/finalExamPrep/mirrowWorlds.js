function mirrorWorlds(data) {
  let pattern = /([#|@])(?<word>[A-Za-z]{3,})\1\1(?<mirror>[A-Za-z]{3,})\1/gm;
  let wordArr = [];
  let mirrorArr = [];
  let pairArr = [];
  let pairs = 0;
  let mirrorCount = 0;

  let current = pattern.exec(data);

  while (current !== null) {
    let word = current.groups["word"];
    wordArr.push(word);

    let mirror = current.groups["mirror"];
    mirrorArr.push(mirror);

    current = pattern.exec(data);
  }
  // migth have bugs
  if (wordArr.length === mirrorArr.length) {
    pairs = Math.floor((wordArr.length + mirrorArr.length) / 2);
  }

  for (let word of mirrorArr) {
    let mirrorCheck = word.split("").reverse().join("");
    for (let checkedWord of wordArr) {
      if (checkedWord === mirrorCheck) {
        mirrorCount++;
        pairArr.push(`${checkedWord} <=> ${word}`);
      }
    }
  }
  if (pairs > 0) {
    console.log(`${pairs} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (mirrorCount > 0) {
    console.log("The mirror words are:");
    console.log(pairArr.join(", "));
  } else {
    console.log("No mirror words!");
  }
}
mirrorWorlds(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
