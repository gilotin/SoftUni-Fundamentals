function activationKeys(data) {
  let activationKey = data.shift();

  for (let line of data) {
    if (line === "Generate") {
      break;
    }
    let [command, propertyOne, propertyTwo, propertyThree] = line.split(">>>");
    let startIndex;
    let endIndex;
    switch (command) {
      case "Contains":
        let substring = propertyOne;
        if (activationKey.includes(substring)) {
          console.log(`${activationKey} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
        break;
      case "Flip":
        let charCase = propertyOne;
        startIndex = Number(propertyTwo);
        endIndex = Number(propertyThree);
        let flippedString = '';
            let cuttedSTring = activationKey.slice(startIndex, endIndex);
            if(charCase === 'Upper'){
               flippedString = cuttedSTring.toUpperCase();
            }else{
               flippedString = cuttedSTring.toLowerCase();
            }
            activationKey = activationKey.replace(cuttedSTring, flippedString);
            console.log(activationKey);
        break;
      case "Slice":
        startIndex = Number(propertyOne);
        endIndex = Number(propertyTwo);
            let slicedString = activationKey.slice(startIndex,endIndex)
            activationKey = activationKey.replace(slicedString,'');
            console.log(activationKey);
        break;
    }
  }
  console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

;
