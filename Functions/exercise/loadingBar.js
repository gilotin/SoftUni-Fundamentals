function loadingBar(number) {
  let completed = "%".repeat(number / 10);
  let incomplete = ".".repeat(10 - completed.length);

  if (completed.length === 10) {
    console.log(`100% Complete!`);
    console.log(`${completed}`);
  } else {
    console.log(`${number}% [${completed}${incomplete}]`);
    console.log("Still loading...");
  }
}
loadingBar(100);
