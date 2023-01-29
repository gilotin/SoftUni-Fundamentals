function hearthDelivery(data) {
  let index = 0;

  let houses = data.shift().split("@").map(Number);
  let cupid = ;
  let command = data[index];
  index++;

  while (command !== "Love!") {
    let action = command.split(" ");
    let jump = action[0];
    let jumpLength = Number(action[1]);

    if(jumpLength)

    
    

   
    command = data[index];
    index++;
  }
}

hearthDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
//hearthDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
