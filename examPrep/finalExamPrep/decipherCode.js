function decipherCode(data) {
    let message = data.shift();
  
  
    for (let line of data) {
      let command = line.split("|")[0];
      if (command === "Decode") {
        return `The decrypted message is: ${message}`;
      }
  
      switch (command) {
        case "Move":
          let numberOfLetters = Number(line.split("|")[1]);
          message = message.split('')
          for (let i = 0; i < numberOfLetters; i++) {
            message.push(message.shift());
          }
          message = message.join('')
          break;
        case "Insert":
          let index = Number(line.split("|")[1]);
          let value = line.split("|")[2];
          message = message.split('')
          message.splice(index, 0, value);
          message = message.join('')
          break;
        case "ChangeAll":
          let substring = line.split("|")[1];
          let replacement = line.split("|")[2];
          message = message.split('')
          for (let el of message) {
            if (el === substring) {
              message.splice(message.indexOf(el), 1, replacement);
            }
          }
          message = message.join('')
          break;
      }
    }
  }
console.log(decipherCode(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]));

console.log(decipherCode(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]));
