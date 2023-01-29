function karaoke(input) {
  let nameList = input.shift().split(", ");
  let songList = input.shift().split(", ");
  let awards = {};

  let index = 0;
  while (input[index] !== "dawn") {
    let [name, song, award] = input[index].split(", ");

    if (nameList.includes(name) && songList.includes(song)) {
      if (!awards.hasOwnProperty(name)) {
        awards[name] = {
          award: [award]
        };
      }
      
      if (!awards[name].award.includes(award)) {
        awards[name].award.push(award)
        awards[name].award.sort((a,b)=>{
            return a.localeCompare(b)
        })
      }

    }
    input[index];
    index++;
  }

  if (Object.keys(awards).length !== 0) {
    let sortedAwads = Object.entries(awards)
      .sort(([KeyA, ValueA], [KeyB, ValueB]) => {
        return ValueB.award.length - ValueA.award.length;
      });

    for (let [name, info] of sortedAwads) {
      console.log(`${name}: ${info.award.length} awards`);
      for (let award of Object.values(info)) {
        award.forEach((el) => {
          console.log(`--${el}`);
        });
      }
    }
  } else {
    console.log("No awards");
  }
}
karaoke([
  "Trifon, Vankata, Gesha",
  "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
  "Gesha, Bon Jovi - It's my life, Best Rock",
  "Vankata, Dragana - Kukavice, Zest Srabsko",
  "Vankata, Dragana - Kukavice, Zest Srabsko",
  "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
  "Vankata, PHP Web, Educational 101",
  "dawn",
]);

console.log(`-------------`);

karaoke([
  "Gesha",
  "Bon Jovi - It's my life",
  "Gesha, Bon Jovi - It's my life, Best Rock",
  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
  "Vankata, PHP Web, Educational 101",
  "dawn",
]);

console.log(`--------------`);

karaoke(["Sino", "Vasko Naidenov - Nova Godina", "dawn"]);
