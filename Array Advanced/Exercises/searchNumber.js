function searchNumber(input, rules) {
    let numOfelements = rules[0];
    let deleteCount = rules[1];
    let searchedNum = rules[2];
    let searchedNumCount = 0;

    let elements = input.splice(0, numOfelements);
        elements.splice(0, deleteCount);

    for(let num of elements){
        if (num === searchedNum) {
        searchedNumCount++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${searchedNumCount} times.`);
}
searchNumber([5, 2, 3, 3, 1, 6], [5, 2, 3]);
//searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
