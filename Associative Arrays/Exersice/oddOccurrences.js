function oddOccurrences(string) {
    let array = string.split(" ");
    let result = new Map();

    for (let word of array) {
        word = word.toLowerCase();
        if (result.has(word)) {
            let oldValue = result.get(word);
            result.set(word, oldValue + 1);
        } else {
            result.set(word, 1);
        }
    }
    let filteredResult = Array.from(result).filter(([key, value]) => {
        return value % 2 !== 0;
    });

    let buffer = "";
    for (let [key, value] of filteredResult) {
        buffer += key + " ";
    }
    console.log(buffer);
}

// ver 2 

function oddOccurrences(string) {
    let array = string.split(" ");
    let result = {}

    for (let word of array) {
        word = word.toLowerCase();
        if (!result[word]) {
            result[word] = 0;
        }

        let oldValue = result[word];
        result[word] = oldValue + 1;
        
    }
    let filteredResult = Object.entries(result).filter(([key, value]) => {
        return value % 2 !== 0;
    });

    let buffer = "";
    for (let [key, value] of filteredResult) {
        buffer += key + " ";
    }
    console.log(buffer);
}
// jugle wont accept that function as answer !!!

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
