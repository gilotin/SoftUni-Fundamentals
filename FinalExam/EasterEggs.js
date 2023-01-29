function easterEggs(input) {

    let regex = /(@+|#+)(?<color>[a-z]{3,})(@+|#+)(\W+|^\W+)(?<count>[0-9]+)\/+/g

    let current = regex.exec(input)

    while(current !== null){

        let eggColor = current.groups["color"];
        let eggCount = current.groups['count'] 
        console.log(`You found ${eggCount} ${eggColor} eggs!`);
        current = regex.exec(input)
    }
}
easterEggs([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);

console.log(`=========`);
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);