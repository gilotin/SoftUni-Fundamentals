function countingWords(string, word){
    let arr = string.split(' ')
    let counter = 0;
    for(let el of arr){
        if(el === word){
            counter++;
        }
    }
    console.log(counter)
}
countingWords('This is a word and it also is a sentence',
'is'
)
countingWords('softuni is great place for learning new programming languages',
'softuni'
)