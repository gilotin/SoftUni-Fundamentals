function rearrange(array) {
  let result = [];

  for (let element of array) {
    element = Number(element);
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }
  console.log(result.join("\n"));
}
rearrange(['7', '-2', '8', '9']);
rearrange(["3", "-2", "0", "-1"]);
