function wildZoo(array) {
  let listOfAnimals = {};
  while (array[0] !== "EndDay") {
    let [command, animalInfo] = array.shift().split(": ");
    let [name, token1, token2] = animalInfo.split("-");
    switch (command) {
      case "Add":
        token1 = Number(token1);
        let area = token2;
        if (listOfAnimals.hasOwnProperty(name)) {
          listOfAnimals[name].foodQuantity += token1;
          break;
        }
        listOfAnimals[name] = { foodQuantity: Number(token1), area: token2 };
        break;
      case "Feed":
        token1 = Number(token1);
        if (!listOfAnimals.hasOwnProperty(name)) {
          break;
        } else if (listOfAnimals.hasOwnProperty(name)) {
          listOfAnimals[name].foodQuantity -= token1;
          if (listOfAnimals[name].foodQuantity <= 0) {
            //console.log(`${name} was successfully fed`);
            delete listOfAnimals[name];
          }
          break;
        }
        break;
    }
  }
  console.log("Animals:");
  for (let animal in listOfAnimals) {
  console.log(`${animal} -> ${listOfAnimals[animal].foodQuantity}g`);
  }
  let totalAnimalArea = {};
  for (let animal in listOfAnimals) {
    let areaName = listOfAnimals[animal].area;
    if (!totalAnimalArea.hasOwnProperty(areaName)) {
      totalAnimalArea[areaName] = { count: 1 };
    } else {
      totalAnimalArea[areaName].count++;
    }
  }
  for (let area in totalAnimalArea) {
    console.log(`${area}: ${totalAnimalArea[area].count}`);
  }
}
wildZoo([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);

console.log(`=================`);
wildZoo([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);
console.log(`=================`);

wildZoo([
  "Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay",
]);
