function bonusScoring(input) {

    let arrayOfData = input.slice().map(Number);
    let students = arrayOfData.shift();
    let lectures = arrayOfData.shift();
    let aditionalBonuses = arrayOfData.shift();
    let maxAttends = 0;
    let maxBonus = 0;
    
    for(let i = 0; i< students; i++){
        let studentAtend = arrayOfData[i];
        let totalBonusOfOneStudent = 0;
        totalBonusOfOneStudent = arrayOfData[i] / lectures * (5 + aditionalBonuses);
        if (totalBonusOfOneStudent >= maxBonus) {
            maxBonus = totalBonusOfOneStudent;
            maxAttends = studentAtend;
        }
    }

    
    
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    
  
    console.log(`The student has attended ${maxAttends} lectures.`)


}
bonusScoring(["6", "25", "30", "12", "19", "24","24", "16", "20"]);


// let index = 0;
//     let students = Number(input[0]);
//     index++;
//     let lectures = Number(input[1]);
//     index++;
//     let aditionalBonuses = Number(input[2]);
//     index++;