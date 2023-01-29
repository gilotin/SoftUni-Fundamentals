function piccolo(data) {
    let parking = new Set();

    for (let line of data) {
        let [direction, carNumber] = line.split(", ");

        switch (direction) {
            case "IN":
                parking.add(carNumber);
                break;
            case "OUT":
                parking.delete(carNumber);
                break;
        }
    }
    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedPArking = Array.from(parking.values()).sort();
        console.log(sortedPArking.join("\n"));
    }
}
piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
