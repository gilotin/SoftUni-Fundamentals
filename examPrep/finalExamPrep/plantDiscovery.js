function plantDiscovery(data) {
  let numOfLines = data.shift();
  let plantsList = [];

  for (let i = 0; i < numOfLines; i++) {
    let token = data.shift().split("<->");
    let plant = token[0];
    let rarity = token[1];
    let plantInfo = {
      plant: plant,
      rarity: rarity,
      rating : 0,
      avgRating : []
    };
    plantsList[plant] = plantInfo;
  }
  let index = 0;
  let command = data[index];
  index++;

  while (command !== "Exhibition") {
    let token = command.split(": ");
    let action = token[0];

    if (action === "Rate") {
      let plant = token[1].split(" - ")[0];
      let rating = Number(token[1].split(" - ")[1]);
      if (plantsList.hasOwnProperty(plant)) {
        plantsList[plant].avgRating.push(rating)
        let avgRating = (plantsList[plant].rating += rating) / plantsList[plant].avgRating.length;
        plantsList[plant].rating = avgRating;
      } else {
        console.log("error");
      }
    } else if (action === "Update") {
      let [plant, newRarity] = token[1].split(" - ");
      if (plantsList.hasOwnProperty(plant)) {
        plantsList[plant].rarity = newRarity;
      } else {
        console.log("error");
      }
    } else if (action === "Reset") {
      let [plant] = token[1].split(" - ");
      if (plantsList.hasOwnProperty(plant)) {
        plantsList[plant].rating = 0;
        plantsList[plant].avgRating = [];

      } else {
        console.log("error");
      }
    }
    command = data[index];
    index++;
  }
  console.log('Plants for the exhibition:')

  for(let info of Object.entries(plantsList)){
    let name = info[0];
    let rarity = info[1].rarity;
    let rating = info[1].rating;
    console.log(`- ${name}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
  }

}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
console.log(`-------------`);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
