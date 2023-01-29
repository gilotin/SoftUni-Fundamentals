function sumOfDigits(num) {
    let stringOfNum = num.toString();
    let sum = 0;

    for (let i = 0; i < stringOfNum.length; i++) {
        sum += Number(stringOfNum[i]);
    }
    console.log(sum);
}