function convertToObject(data) {
  let person = JSON.parse(data);

  for (key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
