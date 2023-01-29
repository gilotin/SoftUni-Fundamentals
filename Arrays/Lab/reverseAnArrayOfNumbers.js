function reverseAnArrayOfNumbers(num, arr){
    let revercedArr = [];
    let output = '';
    for(let i = 0; i < num; i++){
        revercedArr.push(arr[i]);
        
    }
    for(let r = revercedArr.length - 1; r >= 0; r--){
        output += `${revercedArr[r]} `
        
    }
    
        
    console.log(output);
}


//Variant 2


function reverseAnArrayOfNumbers(num, arr){
    let revercedArr = [];
    for(let i = 0; i < num; i++){
        revercedArr.push(arr[i]);
    }
    revercedArr.reverse();
    
    console.log(revercedArr.join(' '));

}


//ver 3


function reverseAnArrayOfNumbers(num, arr){
    let revercedArr = [];
    for(let i = num - 1; i >= 0; i--){
        revercedArr.push(arr[i]);
    }
    
    console.log(revercedArr.join(' '));

}


