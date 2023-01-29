function requiredReading(pagesOfBook, pagePerHour, daysDeadline) {
let totalTime = pagesOfBook / pagePerHour;
let hoursPerDay = totalTime / daysDeadline;
console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);