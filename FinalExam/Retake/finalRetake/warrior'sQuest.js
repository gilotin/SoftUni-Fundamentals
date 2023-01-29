function wariorsQuest(input) {
  let string = input.shift();

  let index = 0;

  while (input[index] !== "For Azeroth") {
    let line = input[index];
    let [command, tokenOne, tokenTwo, tokenThree] = line.split(" ");
    if (command === "Target") {
      command = command + " " + tokenOne;
    }

    switch (command) {
      case "GladiatorStance":
        string = string.toUpperCase();
        console.log(string);
        break;
      case "DefensiveStance":
        string = string.toLowerCase();
        console.log(string);
        break;
      case "Dispel":
        let index = Number(tokenOne);
        let letter = tokenTwo;
        if (index >= 0 && index <= string.length) {
          string = string.replace(string.charAt(index), letter);
          console.log("Success!");
        } else {
          console.log("Dispel too weak.");
        }
        break;
      case "Target Change":
        let firstSubSTring = tokenTwo;
        let secondSubString = tokenThree;
        if (string.includes(firstSubSTring)) {
          while (string.includes(firstSubSTring)) {
            string = string.replace(firstSubSTring, secondSubString);
            console.log(string);
          }
        } else {
          console.log(string);
        }
        break;
      case "Target Remove":
        let substringToRemove = tokenTwo;
        if (string.includes(substringToRemove) && substringToRemove !== "") {
          string = string.replace(substringToRemove, "");
          console.log(string);
        }
        break;
      default:
        console.log("Command doesn't exist!");
        break;
    }

    input[index];
    index++;
  }
}
wariorsQuest([
  "fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Target Remove ",
  "Target Change RICTION riction",
  "For Azeroth",
]);
