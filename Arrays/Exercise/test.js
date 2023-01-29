function solve(input) {
  let heroHealth = 100;
  let currentHeroHealth = heroHealth;
  let heroCoins = 0;
  let room = 0;
  let isDead = false;
  let monsterName = "";

  let stiring = input.toString();
  let array = stiring.split("|");

  for (let i = 0; i < array.length; i++) {
    let newObject = array[i].split(" ");
    room++;

    switch (newObject[0]) {
      case "potion":
        let healthPotion = newObject[1];
        let healedPoints = 0;
        currentHeroHealth += Number(healthPotion);
        if (currentHeroHealth > 100) {
          let exceededeHealth = currentHeroHealth - heroHealth;
          healedPoints = healthPotion - exceededeHealth;
          currentHeroHealth = 100;
        } else {
          healedPoints = healthPotion;
        }
        console.log(`You healed for ${healedPoints} hp.`);
        console.log(`Current health: ${currentHeroHealth} hp.`);
        break;
      case "chest":
        let chestCoins = newObject[1];
        console.log(`You found ${chestCoins} coins.`);
        heroCoins += Number(chestCoins);
        break;
      default:
        monsterName = newObject[0];
        let monsterAtt = newObject[1];
        currentHeroHealth -= Number(monsterAtt);
        if (currentHeroHealth <= 0) {
          console.log(`You died! Killed by ${monsterName}.`);
          console.log(`Best room: ${room}`);
          isDead = true;
          return;
        } else {
          console.log(`You slayed ${monsterName}.`);
        }
        break;
    }
  }
  if (isDead == !true) {
    console.log("You've made it!");
    console.log(`Coins: ${heroCoins}`);
    console.log(`Health: ${currentHeroHealth}`);
  }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
