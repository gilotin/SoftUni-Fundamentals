function gladiator(
  lostFights,
  priceHelmet,
  priceSword,
  priceShield,
  priceArmor
) {
  let helmetDmg = 0;
  let swordDmg = 0;
  let shieldDmg = 0;
  let armorDmg = 0;
  let expenses = 0;

  for (let fights = 1; fights <= lostFights; fights++) {
    if (fights % 2 === 0 && fights % 3 === 0) {
      shieldDmg++;
    }
    if (fights % 3 === 0) {
      swordDmg++;
    }
    if (fights % 2 === 0) {
      helmetDmg++;
    }
    if (
      shieldDmg !== 1 &&
      shieldDmg % 2 === 0 &&
      fights % 2 === 0 &&
      fights % 3 === 0
    ) {
      armorDmg++;
    }
  }

  expenses =
    priceHelmet * helmetDmg +
    priceSword * swordDmg +
    priceShield * shieldDmg +
    priceArmor * armorDmg;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
