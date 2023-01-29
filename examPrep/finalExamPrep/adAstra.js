function adAstra(data) {
    let pattern =/(#|\|)(?<food>[A-Za-z\s]+)\1(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})\1(?<calories>\d{1,5})\1/gm
  
  
    let allCalories = 0;
    let array = [];
  
    let current = pattern.exec(data);
  
    while (current !== null) {
      let food = current.groups["food"];
      let day = current.groups["day"];
      let month = current.groups["month"];
      let year = current.groups["year"];
      let calories = Number(current.groups["calories"]);
          allCalories += calories;
  
      array.push(`Item: ${food}, Best before: ${day}/${month}/${year}, Nutrition: ${calories}`);
  
      current = pattern.exec(data);
    }
  
    console.log(`You have food to last you for: ${Math.floor(allCalories/2000)} days!`);
    console.log(array.join('\n'));
  }
adAstra([
  "#Bread#19/03/21#4000#|Bread|19/03/21#4000#|Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log(`--------------------`);adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
