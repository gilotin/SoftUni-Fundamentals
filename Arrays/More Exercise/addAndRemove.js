function addAndRemove(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let startingNum = 1 + i;
    if (array[i] === "add") {
      result.push(startingNum);
    } else {
      result.pop();
    }
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["add", "remove"])
