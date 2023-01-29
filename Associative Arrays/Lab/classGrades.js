function grades(data) {
    let student = {};

    for (let line of data) {
        let token = line.split(" ");
        let name = token.shift();
        let grades = token.map(Number);
        if (!student.hasOwnProperty(name)) {
            student[name] = grades;
        } else {
            grades.forEach((el) => {
                student[name].push(el);
            });
        }
    }

    let sortedNames = Object.entries(student).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let [key, value] of sortedNames) {
        let avgGrades = value.map(Number).reduce((valueA, valueB) => {
            return valueA + valueB;
        });
        let avgSum = avgGrades / value.length;
        console.log(`${key}: ${avgSum.toFixed(2)}`);
    }
}

//grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
grades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)