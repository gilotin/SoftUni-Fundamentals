function worldTour(data) {
  let jorney = data.shift();
  let newJorney = jorney;
  let index = 0;
  let command = data[index];
  index++;

  while (command !== "Travel") {
    let [action, elementOne, elementTwo] = command.split(":");

    switch (action) {
      case "Add Stop":
        let index = elementOne;
        let string = elementTwo;
        if(jorney[index] !== undefined ){
        newJorney = jorney.split("");
        newJorney.splice(index, 0, string);
        jorney = newJorney.join("");
        }
        break;
      case "Remove Stop":
        let startIndex = Number(elementOne);
        let endIndex = Number(elementTwo);
        if (jorney[startIndex] !== undefined && jorney[endIndex] !== undefined) {
          let deleteLength = endIndex - startIndex+1;
          if(deleteLength > 0){
          newJorney = jorney.split("");
          newJorney.splice(startIndex, deleteLength);
          jorney = newJorney.join("");
          }
        }
        break;
      case "Switch":
        let oldString = elementOne;
        let newString = elementTwo;
        jorney = jorney.replace(oldString, newString);
        break;
        
    }
    console.log(jorney);

    command = data[index];
    index++;
  }
  console.log(`Ready for world tour! Planned stops: ${jorney}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:dudapest:Bulgaria",
  "Travel",
]);
