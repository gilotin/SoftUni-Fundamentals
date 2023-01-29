function pirates(data) {
  let index = 0;
  let towns = {};

  while (data[index] !== "Sail") {
    let townInfo = data[index];
    let [name, people, gold] = townInfo.split("||");
    if (!towns.hasOwnProperty(name)) {
      towns[name] = {
        people: Number(people),
        gold: Number(gold),
      };
    } else {
      towns[name].people += Number(people);
      towns[name].gold += Number(gold);
    }

    data[index];
    index++;
  }

  index++;

  while (data[index] !== "End") {
    let line = data[index];
    let [action, townName, propertyOne, propertyTwo] = line.split("=>");
    let people;
    let gold;
    switch (action) {
      case "Plunder":
        people = Number(propertyOne);
        gold = Number(propertyTwo);
        if (towns.hasOwnProperty(townName)) {
          towns[townName].people -= people;
          towns[townName].gold -= gold;
        }
        if (towns[townName].people >= 0 || towns[townName].gold >= 0) {
          console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        }
        if (towns[townName].people <= 0 || towns[townName].gold <= 0) {
          console.log(`${townName} has been wiped off the map!`);
          delete towns[townName];
        }
        break;
      case "Prosper":
        gold = Number(propertyOne);
        if (towns.hasOwnProperty(townName)) {
          if (gold < 0) {
            console.log("Gold added cannot be a negative number!");
          } else {
            towns[townName].gold += gold;
            console.log(
              `${gold} gold added to the city treasury. ${townName} now has ${towns[townName].gold} gold.`
            );
          }
        }
        break;
    }
    data[index];
    index++;
  }

  let townCount = Object.keys(towns).length;
  if (townCount > 0) {
    console.log(`Ahoy, Captain! There are ${townCount} wealthy settlements to go to:`);
    for (let [town, info] of Object.entries(towns)) {
      console.log(`${town} -> Population: ${info.people} citizens, Gold: ${info.gold} kg`);
    }
  }else{
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  }
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
