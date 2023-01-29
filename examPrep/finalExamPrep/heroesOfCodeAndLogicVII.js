function heroesOfCaL(data) {
  let index = 0;
  let heroNumber = data[index];
  index++;
  let heroes = {};

  for (let i = 0; i < heroNumber; i++) {
    let [heroName, hp, mp] = data[index].split(" ");
    index++;

    heroes[heroName] = {
      hp: Number(hp),
      mp: Number(mp),
    };
  }

  while (data[index] !== "End") {
    let [action, name, propertyOne, propertyTwo] = data[index].split(" - ");

    switch (action) {
      case "CastSpell":
        let mpNeeded = propertyOne;
        let spellName = propertyTwo;
        if (heroes.hasOwnProperty(name)) {
          if (heroes[name].mp >= mpNeeded) {
            heroes[name].mp -= mpNeeded;
            console.log(
              `${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`
            );
          } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
          }
        }
        break;
      case "TakeDamage":
        let damage = propertyOne;
        let attacker = propertyTwo;
        if (heroes.hasOwnProperty(name)) {
          heroes[name].hp -= damage;
          if (heroes[name].hp <= 0) {
            console.log(`${name} has been killed by ${attacker}!`);
            delete heroes[name];
          } else {
            console.log(
              `${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`
            );
          }
        }
        break;
      case "Recharge":
        let amountMana = Number(propertyOne);
        if (heroes.hasOwnProperty(name)) {
          heroes[name].mp += amountMana;
          if (heroes[name].mp > 200) {
            let recoveredAmount = Math.abs(heroes[name].mp - 200 - amountMana);
            heroes[name].mp = 200;
            console.log(`${name} recharged for ${recoveredAmount} MP!`);
          } else {
            console.log(`${name} recharged for ${amountMana} MP!`);
          }
        }
        break;
      case "Heal":
        let healAmount = Number(propertyOne);
        if (heroes.hasOwnProperty(name)) {
          heroes[name].hp += healAmount;
          if (heroes[name].hp > 100) {
            let recoveredHp = Math.abs(heroes[name].hp - 100 - healAmount);
            heroes[name].hp = 100;
            console.log(`${name} healed for ${recoveredHp} HP!`);
          } else {
            console.log(`${name} healed for ${healAmount} HP!`);
          }
        }
        break;
    }
    data[index];
    index++;
  }
  for (let [hero, info] of Object.entries(heroes)) {
    console.log(`${hero}`)
    console.log(`  HP: ${info.hp}`);
    console.log(`  MP: ${info.mp}`);

  }
}
heroesOfCaL([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("----------------------------------");
heroesOfCaL([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
