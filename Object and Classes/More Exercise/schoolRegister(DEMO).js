function schoolRegister(data){

    let obj = {};
    let dataArray = [];
    let nameList = []
    let listOfAvgScore = []

    
    for(let i = 0; i < data.length; i++){
        
        let [studentNameData, gradeData, scoreData] = data[i].split(', ')
        let [info, name] = studentNameData.split(': ');
        let [infoGrade, grade] = gradeData.split(': ');
        let [infoScore, avgScore] = scoreData.split(': ');
        
        
  
}
   
    let sortedData = dataArray.sort((a,b) => {
        return a.grade - b.grade;
    });
    

}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]);