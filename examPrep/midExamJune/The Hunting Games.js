function theHuntingGames(data) {
    let index = 0;
    let daysOfAdvencure = Number(data[index]);
    index++;
    let numOfPlayers = Number(data[index]);
    index++;
    let groupEnergy = Number(data[index]);
    index++;
    let water = Number(data[index]);
    index++;
    let food = Number(data[index]);
    index++;
    let dayCount = 1;

    let totalWater = daysOfAdvencure * (numOfPlayers * water);
    let totalFood = daysOfAdvencure * (numOfPlayers * food);

    while (groupEnergy !== 0 && dayCount <= daysOfAdvencure) {
        if (groupEnergy <= 0) {
            break;
        }
        let energyCost = data[index];

        groupEnergy -= energyCost;

        if (dayCount % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater -= totalWater * 0.3;
        }
        if (dayCount % 3 === 0) {
            totalFood -= totalFood / numOfPlayers;
            groupEnergy *= 1.1;
        }

        dayCount++;
        energyCost = data[index];
        index++;
    }
    if (groupEnergy <= 0) {
        console.log(
            `You will run out of energy. You will be left with ${totalFood.toFixed(
                2
            )} food and ${totalWater.toFixed(2)} water.`
        );
    } else {
        console.log(
            `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`
        );
    }
}
theHuntingGames([
    "10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330",
]);

// theHuntingGames([
//     "12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496",
// ]);
