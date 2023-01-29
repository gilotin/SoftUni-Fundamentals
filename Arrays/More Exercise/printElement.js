function printElement(array) {
  let lastElementOfArr = Number(array.pop());
  let result = [];

  for (let i = 0; i < array.length - 1; i+=lastElementOfArr) {
    result.push(array[i]);
  }
  console.log(result.join(' '))
}
printElement(["5", "20", "31", "4", "20", "2"]);
printElement(['dsa', 'asd', 'test', 'test', '2'])
printElement(['1', '2', '3', '4', '5', '6'])