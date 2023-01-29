function stringManipulator(input) {
  let mySTring = input.shift();

  let index = 0;
  while (input[index] !== "End") {
    let [command, propertyOne, PropertyTwo] = input[index].split(" ");
    let char;
    let substring;
    switch (command) {
      case "Translate":
        char = propertyOne;
        let replacement = PropertyTwo;
        while (mySTring.includes(char)) {
          mySTring = mySTring.replace(char, replacement);
        }
        console.log(mySTring);
        break;
      case "Includes":
        substring = propertyOne;
        if (mySTring.includes(substring)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        substring = propertyOne;
        if (mySTring.startsWith(substring)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        mySTring = mySTring.toLowerCase();
        console.log(mySTring);
        break;
      case "FindIndex":
        char = propertyOne;
        if (mySTring.lastIndexOf(char) !== -1) {
          console.log(mySTring.lastIndexOf(char));
        }
        break;
      case "Remove":
        let startIndex = Number(propertyOne);
        let count = Number(PropertyTwo);
        let cuttedSTring = mySTring.substring(startIndex, count + startIndex);
        mySTring = mySTring.replace(cuttedSTring, "");
        console.log(mySTring);
        break;
    }

    input[index];
    index++;
  }
}
stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);

console.log("====================");
stringManipulator([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
