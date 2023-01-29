function minerTask(data) {
  let obj = {};

  for (let i = 0; i < data.length; i++) {
    let name = data[i++];
    let quantity = Number(data[i]);

    if (!obj.hasOwnProperty(name)) {
      obj[name] = quantity;
    } else {
      obj[name] += quantity;
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    console.log(key, "->", value);
  }
}
//minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
