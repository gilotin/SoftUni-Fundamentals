function numberModification(input) {

    let number = input.toString().split("");
    let sum = number.map(Number).reduce((a, b) => a + b);

    for (let i = 0; i < number.length; i++) {
        if (sum / number.length < 5) {
            number.push("9");
            sum += 9;
        }
    }
    console.log(number.join(""));
}
numberModification(101);
numberModification(5835);
