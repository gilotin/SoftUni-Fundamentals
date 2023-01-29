function guineaPig(input) {
    let isFed = true
    let index = 0;
    let foodForMonth = 1000 * Number(input[index]);
    index++;
    let hayForMonth = 1000 * Number(input[index]);
    index++;
    let coverForMonth = 1000 * Number(input[index]);
    index++;
    let guineaPigWeigth = 1000 * Number(input[index]);
    index++;
    let dayCounter = 1;

    while (dayCounter <= 30) {
        if (hayForMonth <= 0 || coverForMonth <= 0 || foodForMonth <= 0) {
            break;
        }
        
        if(dayCounter % 2 === 0){
            foodForMonth -= 300;
            hayForMonth -= foodForMonth * 0.05;
        }else {
            foodForMonth -= 300;
        } 
        
        if( dayCounter % 3 === 0){
            coverForMonth -= guineaPigWeigth / 3;
        }
        dayCounter++;
        
    }
    if(hayForMonth <= 0 || coverForMonth <= 0 || foodForMonth <= 0){
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodForMonth / 1000).toFixed(2)}, Hay: ${(hayForMonth / 1000).toFixed(2)}, Cover: ${(coverForMonth / 1000).toFixed(2)}.`)
        
    }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
