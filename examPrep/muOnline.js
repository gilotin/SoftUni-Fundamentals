function muOnline(input) {
    let heroHealth = 100;
    let currentHeroHealth = heroHealth;
    let bitcoins = 0;
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
          }else{
            healedPoints = healthPotion;
          }
          console.log(`You healed for ${healedPoints} hp.`);
          console.log(`Current health: ${currentHeroHealth} hp.`);
          break;
        case "chest":
          let chestCoins = newObject[1];
          console.log(`You found ${chestCoins} bitcoins.`);
          bitcoins += Number(chestCoins);
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
      console.log(`Bitcoins: ${bitcoins}`);
      console.log(`Health: ${currentHeroHealth}`);
    }
  }
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");