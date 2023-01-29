function thePianist(data) {
  let numberOfPieces = data.shift();
  let musicanList = [];

  for (let i = 0; i < numberOfPieces; i++) {
    let token = data.shift();
    let [piece, composer, key] = token.split("|");

    musicanList[piece] = {
      composer: composer,
      key: key,
    };
  }

  let index = 0;
  let command = data[index];
  index++;

  while (command !== "Stop") {
    let [action, piece, composer, key] = command.split("|");
    if (action === "Add") {
      if (musicanList.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        musicanList[piece] = {
          composer: composer,
          key: key,
        };
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }
    }
    if (action === "Remove") {
      if (musicanList.hasOwnProperty(piece)) {
        delete musicanList[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }
    if (action === "ChangeKey") {
      if (musicanList.hasOwnProperty(piece)) {
        let newKey = composer;
        musicanList[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }
    command = data[index];
    index++;
  }

  for (let line of Object.entries(musicanList)) {
    let piece = line[0];
    let composer = line[1].composer;
    let key = line[1].key;
    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
  }
}
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
