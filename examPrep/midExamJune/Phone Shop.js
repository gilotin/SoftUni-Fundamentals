function phoneShop(input) {
  let list = input.shift().split(", ");
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "End") {
    command = command.split(" - ");
    let action = command[0];
    let phone = command[1];

    switch (action) {
      case "Add":
        if (list.includes(phone)) {
          command = input[index];
          index++;
          continue;
        } else {
          list.push(phone);
        }
        break;
      case "Remove":
        if (list.includes(phone)) {
          list.splice(list.indexOf(phone), 1);
        } else {
          command = input[index];
          index++;
          continue;
        }
        break;
      case "Bonus phone":
        phone = phone.split(":");
        let oldPhone = phone[0];
        let newPhone = phone[1];
        if (list.includes(oldPhone)) {
          list.splice(list.indexOf(oldPhone) + 1, 0, newPhone);
          //HuaweiP20, XiaomiNote, Iphone5
        } else {
          command = input[index];
          index++;
          continue;
        }
        break;
      case "Last":
        if (list.includes(phone)) {
          list.push(list.splice(list.indexOf(phone), 1));
        } else {
          command = input[index];
          index++;
          continue;
        }
        break;
    }

    command = input[index];
    index++;
  }
  console.log(list.join(", "));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);
