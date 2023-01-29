function convertToJson(name, lastName, hairColor){
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    return JSON.stringify(person)
}
console.log(convertToJson('George', 'Jones', 'Brown'));