function secretChat(data) {
    let message = data.shift();
  
    for (let line of data) {
      if (line === "Reveal") {
        break;
      }
      let [command, actionOne, actionTwo] = line.split(":|:");
  
      switch (command) {
        case "InsertSpace":
          let index = actionOne;
          message =
          message.substring(0, index) + " " + message.substring(index);
          break;
        case "Reverse":
          let strToReverce = actionOne;
          if (message.includes(strToReverce)) {
            strToReverce = strToReverce.split("").reverse().join("");
            message = message.replace(actionOne, "").concat(strToReverce);
          } else {
            console.log("error");
            continue;
          }
          break;
        case "ChangeAll":
          let substring = actionOne;
          let replacement = actionTwo;
  
          while (message.includes(substring)) {
            message = message.replace(substring, replacement);
          }
          break;
      }
      console.log(message);
    }
    console.log(`You have a new text message: ${message}`);
  }
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
