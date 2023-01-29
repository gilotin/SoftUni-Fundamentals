function houseParty(input) {
    let guestList = [];

    for (let element of input) {
        let command = element.split(" ");
        let name = command[0];
        if (command.length === 3) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (!guestList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            }
        }
    }
    console.log(guestList.join("\n"));
}

houseParty(["Allie is going!", "George is going!", "John is not going!", "George is not going!"]);
