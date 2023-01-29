function softUniReception(input) {
  let employeeOne = Number(input[0]);
  let employeeTwo = Number(input[1]);
  let employeeThree = Number(input[2]);
  let students = Number(input[3]);
  let restCounter = 0;
  let hourCouter = 0;

  let employeeEfficiency = employeeOne + employeeTwo + employeeThree;

  while (students > 0) {
    if (students === 0) {
      break;
    }
    if (restCounter === 3) {
      hourCouter++;
      restCounter = 0;
    }
    hourCouter++;
    restCounter++;
    students -= employeeEfficiency;
  }

  console.log(`Time needed: ${hourCouter}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
