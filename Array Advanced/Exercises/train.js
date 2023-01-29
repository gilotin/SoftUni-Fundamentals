function train(input) {
    let wagonsArr = input.shift()
                         .split(" ")
                         .map(Number);
    let maxCapacity = Number(input.shift());
                         
    for (let i = 0; i < input.length; i++) {
       let command = input[i].split(' ');
        if(command[0] === 'Add'){
        wagonsArr.push(Number(command[1]));
        }else{
            for(let k = 0; k < wagonsArr.length; k++){
                if(maxCapacity >=  Number(command[0]) + wagonsArr[k]){
                    wagonsArr[k] += Number(command[0]);
                    break;
                }
            }
        }
     }
    console.log(wagonsArr.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
