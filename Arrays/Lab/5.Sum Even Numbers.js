function sumEvenNumbers(array){
    let sum = 0;
    for(let i = 0; i <= array.length - 1; i++){
        if(array[i] % 2 === 0){
            sum += Number(array[i]);
        }
        
    }

    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);