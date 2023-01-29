function santaHelper(input) {
  let messageArr = [];
  let numKey = input.shift();
  let regex = /@(?<name>[A-Za-z]+)[^-!@:>]+!(?<behavior>[G|B])!/g;

  for (let line of input) {
    if (line === "end") {
      break;
    }
    let newCode = "";
    let token = line.split("");
    for (let el of token) {
      let decodedLine = el.charCodeAt() - Number(numKey);
      let newLetter = String.fromCharCode(decodedLine);
      newCode += newLetter;
    }
    messageArr.push(newCode);
  }

  let current = regex.exec(messageArr);

  while (current !== null) {
    let name = current.groups["name"];
    let behavior = current.groups["behavior"];

    if (behavior === "G") {
      console.log(name);
    }

    current = regex.exec(messageArr);
  }
}
santaHelper(["3", "CNdwhamigyenumje$J$", "CEreelh-nmguuejn$J$", "CVwdq&gnmjkvng$Q$", "end"]);
console.log(`==============`);
santaHelper([
  "3",
  "N}eideidmk$'(mnyenmCNlpamnin$J$",
  "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
  "ppqmkkkmnolmnnCEhq/vkievk$Q$",
  "yyegiivoguCYdohqwlqh/kguimhk$J$",
  "end",
]);
