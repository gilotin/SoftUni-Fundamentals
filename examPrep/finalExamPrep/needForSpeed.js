function needForSpeed(data) {
  let numOfCars = data.shift();
  let cars = {};

  for (let i = 0; i < numOfCars; i++) {
    let [carName, mileage, fuel] = data.shift().split("|");
    cars[carName] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  let index = 0;

  while (data[index].split(" : ")[0] !== "Stop") {
    let command = data[index].split(" : ")[0];
    let name = data[index].split(" : ")[1];
    let propertyTwo = Number(data[index].split(" : ")[2]);
    let propertyThree = Number(data[index].split(" : ")[3]);

    switch (command) {
      case "Drive":
        let distance = propertyTwo;
        let fuelNeeded = propertyThree;
        if (cars.hasOwnProperty(name)) {
          if (cars[name].fuel < fuelNeeded) {
            console.log("Not enough fuel to make that ride");
          } else {
            cars[name].mileage += distance;
            cars[name].fuel -= fuelNeeded;
            console.log(
              `${name} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`
            );
          }
          if (cars[name].mileage > 100000) {
            delete cars[name];
            console.log(`Time to sell the ${name}!`);
          }
        }
        break;
      case "Refuel":
        let refilFuel = propertyTwo;
        if (cars.hasOwnProperty(name)) {
          cars[name].fuel += refilFuel;
          if (cars[name].fuel > 75) {
            refilFuel = Math.abs(cars[name].fuel - 75 - refilFuel);
            cars[name].fuel = 75;
          }
          console.log(`${name} refueled with ${refilFuel} liters`);
        }
        break;
      case "Revert":
        let kilometers = propertyTwo;
        if (cars.hasOwnProperty(name)) {
          if (cars[name].mileage - kilometers < 10000) {
            cars[name].mileage = 10000;
          } else {
            cars[name].mileage -= kilometers;
            console.log(`${name} mileage decreased by ${kilometers} kilometers`);
          }
        }
        break;
    }
    data[index].split(" : ")[0];
    index++;
  }
  for (let info of Object.entries(cars)) {
    let name = info[0];
    let mileage = info[1].mileage;
    let fuel = info[1].fuel;
    console.log(`${name} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
  }
}
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
