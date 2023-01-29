function number(string){
    let count = 0;
    let arrayOfNumbers = string.split(' ').map(Number).sort((a,b) =>
    {
        return b - a;
    })
    let arraylength = arrayOfNumbers.length;
    let sum = arrayOfNumbers.reduce((a,b) => a+b, 0);
    let avg = (sum / arraylength).toFixed(2);

    let fiveBiggerNumbers = [];

    for(el of arrayOfNumbers){
        if(avg > el){
            fiveBiggerNumbers.push(el)

        }

    }
    fiveBiggerNumbers = fiveBiggerNumbers.slice(0,5)
    
    
    if(arraylength < 5){
        console.log('No')
    }else{
    console.log(fiveBiggerNumbers.join(' '));
    }
}
number('10 20 30 40 50');
number('5 2 3 4 -10 30 40 50 20 50 60 60 51');
number('1');
number('-1 -2 -3 -4 -5 -6');