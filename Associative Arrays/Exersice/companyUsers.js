function companyUsers(data) {
  let register = {};

  for (let line of data) {
    let [company, indentification] = line.split(" -> ");

    if (!register.hasOwnProperty(company)) {
      register[company] = new Set();
    }
    register[company].add(indentification);
  }

  let sorted = Object.entries(register).sort(sortedKeys);

  for (let [name, id] of sorted) {
    console.log(`${name}`);
    for (let el of id) {
      console.log(`-- ${el}`);
    }
  }

  function sortedKeys(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
//companyUsers(["SoftUni -> AA12345", "SoftUni -> BB12345", "Microsoft -> CC12345", "HP -> BB12345"]);
//console.log(`----------`);
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
