function spiceMustFlow(startingYield) {
  let yieldDrops = -10;
  let workersConsumption = 26;
  let dayCounter = 0;
  let minedSpices = 0;
  let spices = startingYield;

  while (spices >= 100) {
    minedSpices += spices;
    minedSpices -= workersConsumption;
    spices += yieldDrops;
    dayCounter++;
  }
  console.log(dayCounter);
  if (dayCounter !== 0) {
    console.log(minedSpices - 26);
  } else {
    console.log(minedSpices);
  }
}
spiceMustFlow(450);
