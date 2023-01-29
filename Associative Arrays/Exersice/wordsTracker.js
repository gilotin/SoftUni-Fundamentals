function wordsTracker(data) {
    let result = new Map();

    let words = data.shift().split(" ");
    for (let word of words) {
        result.set(word, 0);
    }
    for (let el of data) {
        if (result.has(el)) {
            let oldValue = result.get(el);
            result.set(el, oldValue + 1);
        }
    }
    let sortedResult = Array.from(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA;
    });

    for (let [key, value] of sortedResult) {
        console.log(key, "-", value);
    }
}
wordsTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
