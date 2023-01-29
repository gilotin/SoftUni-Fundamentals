function printDna(lines) {
  let symbols = "ATCGTTAGGG";
  let array = symbols.split("");
  let counter = 0;

  for (let i = 1; i <= lines; i++) {
    let a = array.shift();
    let b = array.shift();

    if (i === 1 ||  i % 4 === 1) {
      console.log(`**${a}${b}**`);
    } else if (i === 2 || i % 4 === 2) {
      console.log(`*${a}--${b}*`);
    } else if (i === 3 || i % 4 === 3) {
      console.log(`${a}----${b}`);
    } else if (i === 4 || i % 4 === 0 ) {
      console.log(`*${a}--${b}*`);
    }
    array.push(a);
    array.push(b);
  }
}
printDna(4);
