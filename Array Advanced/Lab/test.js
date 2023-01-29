function airPollution(map, condition) {
    let matrix = map.map((x) => x.split(' ').map(Number));
    let row, colum, tempIndex, increase = 0;

    let breezeF = (rows) => matrix[row].forEach(element => {
        matrix[row][tempIndex] = (element - 15), tempIndex++;
    });
    let galeF = (colum) => matrix[tempIndex].forEach(element => {
        matrix[tempIndex][colum] = (matrix[tempIndex][colum] - 20), tempIndex++;
    });
    let smogF = (all) => matrix.forEach(element => {
        matrix[tempIndex] = element.map((x) => x + increase); tempIndex++;
    });

    for (let i = 0; i < condition.length; i++) {

        let command = condition[i].split(' ');
        let type = command[0];
        let indexOrValue = Number(command[1]);

        tempIndex = 0;
        row = 0;
        colum = 0;
        increase = 0;

        switch (type) {
            case 'breeze':
                row = indexOrValue;
                breezeF(tempIndex); break;
            case 'gale':
                colum = indexOrValue;
                galeF(colum); break;
            case 'smog':
                increase = indexOrValue;
                smogF(tempIndex); break;
            default: break;
        }
    }

    let printLine = [];

    for (let r = 0; r < matrix.length; r++) {

        for (let c = 0; c < matrix[r].length; c++) {

            if (matrix[r][c] < 0) {
                matrix[r][c] = 0;
            }
            if (matrix[r][c] >= 50) {
                printLine.push(`[${r}-${c}]`)
            }
        }
    }

    if (printLine.length == 0) {
        console.log('No polluted areas')
    } else if (printLine.length > 1) {
        console.log(`Polluted areas: ${printLine.join(', ')}`)
    } else {
        console.log(`Polluted areas: ${printLine.toString()}`)

    }
}