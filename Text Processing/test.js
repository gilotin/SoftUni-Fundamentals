function employee(input) {
  let counter = 0;
  let regex =
  /(?<name>[A-Z][a-z]{2,}\s[A-Z][a-z]{2,})#+(?<position>[A-Z][a-z]+([-&][A-Za-z]+){0,2})[0-9]{2}(?<company>[A-Z][A-Za-z0-9]+)\s(?<type>\w+[\.]*)/gm
  let numberOfTheInput = Number(input.shift());

  let current = regex.exec(input);

  while (current !== null) {
    if (counter >= numberOfTheInput) {
      break;
    }
    let name = current.groups["name"];
    let position = current.groups["position"];
    position = position.split('&').join(' ')
    let company = current.groups["company"];
    let type = current.groups["type"];

    console.log(`${name} is ${position} at ${company} ${type}`);
    counter++;
    current = regex.exec(input);
  }
}
employee([
  "4",
  "Tanya Petrova##Dental&Assistants25Health Ltd.",
  "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
  "George Fill####Orderlies99Health JSC",
  "Lily petrova#Speech&Pathology&Assistants60Health Ltd.",
]);

console.log('=================');
employee(["4",
"Peter PetrovPsychology&Teachers25School Ltd.",
"Kalin kalinov#Special Education Teachers00 School Ltd.",
"Lilyana Kuncheva#### Tutor999School JSC",
"Kliment Genchev#Teacher&Assistants20School Ltd."])
console.log(`===============`);
employee(["2",
"Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
"Monica Hristova####Nuclear&Engineer99Station JSC"])
