function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentValue = commands[i].split(" ");
    let currentCommand = currentValue.shift();
    currentValue = currentValue.map(Number);

    let sumPairs = 0;
    let pairsOfSomeNums = [];

    switch (currentCommand) {
      case "add":
        let indexAdd = currentValue[0];
        let elementToAdd = currentValue[1];
        nums.splice(indexAdd, 0, elementToAdd);
        break;
      case "addMany":
        let indexToAddMany = currentValue.shift();
        nums.splice(indexToAddMany, 0, [...currentValue].join(' '));
        break;
      case "contains":
        console.log(nums.indexOf(currentValue[0]));
        break;
      case "remove":
        let indexToRemove = currentValue[0];
        nums.splice(indexToRemove, 1);
        break;
      case " shift":
        for (let k = 0; i < currentValue[0]; k++) {
          nums.push(nums.shift());
        }
        break;
      case "sumPairs":
        if (nums.length % 2 !== 0) {
          nums.push(0);
        }
        for (f = 0; f < nums.length; f += 2) {
          sumPairs = nums[f] + nums[f + 1];
          sumPairs.push(pairsOfSomeNums);

        }
        nums = [...pairsOfSomeNums];
        break;
      case "print":
        console.log(`[ ${nums.join(', ')} ]`);
        break;
    }
  }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
