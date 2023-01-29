function garage(data) {
    let garageLot = {};

    for (line of data) {
        let info = line.split(" - ");
        let garageNum = info.shift();

        if (!garageLot.hasOwnProperty(garageNum)) {
            garageLot[garageNum] = [];
        }
        garageLot[garageNum].push(info);
    }

    for (let [key, value] of Object.entries(garageLot)) {
        console.log(`Garage № ${key}`);

        for (let el of value) {
            let carInfo = el.toString().replace(/: /g, " - ");
            console.log(`--- ${carInfo}`);
        }
    }
}
garage([
    "1 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
