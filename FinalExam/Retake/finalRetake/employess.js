function employee(input) {
 
  let regex =/^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/gm

  let numberOfTheInput = Number(input.shift());

  for(let i = 0; i < numberOfTheInput; i++){
    let currentLine = input[i];
    let name = currentLine.match(regex)
    if(currentLine === null){
        break;
    }

    console.log(name);
  }

}
employee([
  "4",
  "Tanya Petrova##Dental&Assistants25Health Ltd.",
  "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
  "George Fill####Orderlies99Health JSC",
  "Lily petrova#Speech&Pathology&Assistants60Health Ltd.",
]);
