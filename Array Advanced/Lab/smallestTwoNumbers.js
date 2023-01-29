function smallestTwoNumbers(array) {
    let smalletNumbers = array.sort((a, b) => {
        return a - b;
    });
    let firstTwoNum = smalletNumbers.slice(0, 2);
    console.log(firstTwoNum.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
