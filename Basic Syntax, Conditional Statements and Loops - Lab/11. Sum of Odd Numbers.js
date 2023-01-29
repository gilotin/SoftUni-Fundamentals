function solve(num){
    let couter = 0;
    let i = 1;
    let sum = 0;
    while(couter < num){
        couter++;
        console.log(i);
        sum += i;
        i+=2;
    }
    console.log(`Sum: ${sum}`);
}


solve(5);
