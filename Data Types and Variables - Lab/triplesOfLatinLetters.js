function triplesOfLatinLetters(num) {
    for( let i = 0; i < num; i++){
        let firstLetter = String.fromCharCode(97+ i);
        for(let a = 0; a < num; a++){
            let secondLetter = String.fromCharCode(97+ a);
            for(let b = 0; b < num; b++){
                let thirdLetter = String.fromCharCode(97+ b);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
        
    }
    
}
triplesOfLatinLetters('3');
