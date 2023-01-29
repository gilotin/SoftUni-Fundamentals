function passReset(data) {
  let password = data.shift();

  let index = 0;
  let command = data[index];
  index++;

  while (command !== "Done") {
    let action = command.split(" ")[0];
    let propertyOne = command.split(" ")[1];
    let propertyTwo = command.split(" ")[2];

    switch (action) {
      case "TakeOdd":
        let newPass = "";
        for (let i = 0; i < password.length; i++) {
          if (i % 2 === 1) {
            newPass += password[i];
          }
        }
        password = newPass
        console.log(password);
        break;
      case "Cut":
        let index = Number(propertyOne);
        let length = Number(propertyTwo);
        partToCut = password.substring(index, index + length);
        password = password.replace(partToCut, "");
        console.log(password);
        break;
      case "Substitute":
        let substring = propertyOne;
        let substitute = propertyTwo;
        if (password.includes(substring)) {
          while (password.includes(substring)) {
            password = password.replace(substring, substitute);
          }
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }

    command = data[index];
    index++;
  }
  console.log(`Your password is: ${password}`);
}
passReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
