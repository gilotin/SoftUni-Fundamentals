function spaceTravel(data){
  let array = data.shift().split('||');

  let index = 0;
  let command = array[index];
  index++;

  let fuel = data.shift();
  let ammo = data.shift();
 
  while(command !== 'Titan'){
      command = command.split(" ");
      let action = command[0]
      let number = Number(command[1])
     
      switch(action){
          case 'Travel' :
              if(fuel >= number){
              fuel -= number;
              console.log(`The spaceship travelled ${number} light-years.`)
              }else{
              return "Mission failed."
              }
               break;
          case 'Enemy':
              if(ammo >= number){
                  ammo -= number;
                  console.log(`An enemy with ${number} armour is defeated.`)
              }else{
                  fuel -= number * 2;
                  if(fuel >= 0){
                      console.log(`An enemy with ${number} armour is outmaneuvered.`)
                  }else{
                      return "Mission failed."
                  }
              }
               break;
          case 'Repair':
              fuel += number;
              ammo += number * 2;
              console.log(`Ammunitions added: ${number * 2}.`)
              console.log(`Fuel added: ${number}.`)
               break;
      }
      
      command = array[index];
      index++
  }

 if(fuel >= 0 && command === 'Titan'){
  return "You have reached Titan, all passengers are safe."
 }

}
console.log(spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]));

console.log(`--------------------------------------`)

console.log(spaceTravel(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan", "60", "100"]))