function finalQuest(input) {
  let sentenceArr = input.shift().split(" ");

  let index = 0;
  while (input[index] !== "Stop") {
    let [command, tokenOne, tokenTwo] = input[index].split(" ");

    switch (command) {
      case "Delete":
        let index = Number(tokenOne);
        if (sentenceArr[index + 1] !== undefined) {
          sentenceArr.splice(index + 1, 1);
        }
        break;
      case "Swap":
        if (sentenceArr.includes(tokenOne) && sentenceArr.includes(tokenTwo)) {
          let wordOneIndex = sentenceArr.indexOf(tokenOne);
          let wordTwoIndex = sentenceArr.indexOf(tokenTwo);
          let swap = sentenceArr[wordTwoIndex];
          sentenceArr[wordTwoIndex] = sentenceArr[wordOneIndex];
          sentenceArr[wordOneIndex] = swap;
        }
        break;
      case "Put":
        let putIndex = Number(tokenTwo);
        if (sentenceArr[putIndex - 1] !== undefined || putIndex === sentenceArr.length) {
          if (putIndex === sentenceArr.length) {
            sentenceArr.push(tokenOne);
          } else {
            sentenceArr.splice(putIndex - 1, 0, tokenOne);
          }
        }
        break;
      case "Sort":
        sentenceArr.sort((a, b) => {
          return b.localeCompare(a);
        });
        break;
      case "Replace":
        if (sentenceArr.includes(tokenTwo)) {
          let indexOfWord = sentenceArr.indexOf(tokenTwo);
          sentenceArr[indexOfWord] = tokenOne;
        }
        break;
    }

    input[index];
    index++;
  }

  console.log(sentenceArr.join(" "));
}
// finalQuest([
//   "Congratulations! You last also through the have challenge!",
//   "Swap have last",
//   "Replace made have",
//   "Delete 2",
//   "Put it 4",
//   "Stop",
// ]);

//finalQuest(["This the my quest! final", "Put is 2", "Swap final quest!", "Delete 2", "Stop"]);

// finalQuest([
//   "Please, follow the instructions!",
//   "Put You 0",
//   "Delete 3",
//   "Replace me you",
//   "Replace follow know",
//   "Stop",
// ]);

finalQuest(["apapa bababa ceeee ddaeada ", "Sort", "Stop"]);
