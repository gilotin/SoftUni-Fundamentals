function wordOccurrences(data) {
    let wordCount = new Map();

    for (let line of data) {
        if (wordCount.has(line)) {
            wordCount.set(line, wordCount.get(line) + 1);
        } else {
            wordCount.set(line, 1);
        }
    }
    let sortedWords = Array.from(wordCount).sort((a, b) => {
        return b[1] - a[1];
    });

    for (let [key, value] of sortedWords) {
        console.log(key, "->", value + " times");
    }
}
wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
]);
