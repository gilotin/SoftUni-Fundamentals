function dayOfWeek(number) {
  let arrOfDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = arrOfDays[number - 1];
  if (number >= 0 && number <= 7) {
    console.log(day);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek([7]);
