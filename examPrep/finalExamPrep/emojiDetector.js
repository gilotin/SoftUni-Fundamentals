function emojiDetector(data) {
  let regex = /(?<tags>[:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/gm
  let coolThresholdArr = [];
  let emojiCount = 0;
  let emojiArr = [];
  let emojiThreshhold = 0;

  let coolCheck = data.toString().split("");

  coolCheck.forEach((el) => {
    if (!isNaN(el)) {
      return coolThresholdArr.push(el);
    }
  });

  let coolThreshold = coolThresholdArr
    .join(" ")
    .replace(/\s/g, "")
    .split("")
    .reduce((a, b) => {
      return a * b;
    });

  console.log(`Cool threshold: ${coolThreshold}`);
  let current = regex.exec(data);
  while (current !== null) {
    
    let emoji = current.groups["emoji"];
    let tags = current.groups["tags"];
    for (let i = 0; i < emoji.length; i++) {
      emojiThreshhold += emoji.charCodeAt(i);
    }
    if (emojiThreshhold > coolThreshold) {
      emojiArr.push(`${tags}${emoji}${tags}`);
    }

    emojiCount++;
    emojiThreshhold = 0;
    current = regex.exec(data);
  }
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  emojiArr.forEach((el) => console.log(el));
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 ***Tigers***, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
