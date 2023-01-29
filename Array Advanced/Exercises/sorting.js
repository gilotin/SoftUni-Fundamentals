function sorting(input) {
    let sortedArray = [];
    input.sort((a, b) => {
        return a - b;
    });

    while(input.length != 0) {
        
        sortedArray.push(input.pop());
        sortedArray.push(input.shift());
    }

    console.log(sortedArray.join(" "));
}
sorting([1, 3, 52, 69, 63, 31,21, 2, 18, 94]);

