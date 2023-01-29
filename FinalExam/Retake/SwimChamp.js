function swimChamp(input) {
  let days = Number(input.shift());
  let pointsNeeded = Number(input.shift());
  let swimmersCount = Number(input.shift());
  let hotelPriceForADay = Number(input.shift());
  let feePerSwimmer = Number(input.shift());

  let pointsEarned = 0;
  let hotelTax = 0;

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      pointsEarned += Number(input[i]);
    } else {
      pointsEarned += Number(input[i]) * 1.05;
    }
  }

  hotelTax = hotelPriceForADay * swimmersCount * days;

  totalTax = hotelTax + feePerSwimmer * swimmersCount;
  pointsEarned = Math.round(pointsEarned);
  if (pointsEarned >= pointsNeeded) {
    totalTax -= totalTax * 0.25;
    console.log(`Money left to pay: ${totalTax.toFixed(2)} BGN.`);
    console.log("The championship was successful!");
  } else {
    totalTax -= totalTax * 0.1;
    console.log(`Money left to pay: ${totalTax.toFixed(2)} BGN.`);
    console.log("The championship was not successful.");
  }
}
swimChamp(["3", "400", "5", "70.6", "15.0", "100.6", "300.59", "250.9"]);
swimChamp(["2", "600", "3", "100.8", "50.5", "100.68", "80.1"]);
swimChamp(["3", "500", "5", "100.9", "50.1", "100.5", "301.0", "80.0"]);
