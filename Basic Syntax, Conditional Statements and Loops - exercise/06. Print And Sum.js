function solve(start, end) {
    let count = 0;
    let printLine = '';
    for( let i = start; i <= end; i++) {
        printLine += `${i} `;
        count += i;

    }
    console.log(printLine);
    console.log(`Sum: ${count}`);
}
solve(50, 60);