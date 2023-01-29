function solve(data) {
    let leaderboard = {};
  
    let names = data.shift().split(", ");
  
    let patternName = /(?<name>[A-Za-z])/g;
  
    let patternDistance = /(?<distance>[0-9])/g;
  
    names.forEach((name) => {
      leaderboard[name] = 0;
    });
  
    for (let i = 0; i < data.length; i++) {
      let currentLine = data[i];
      if (currentLine === "end of race") {
        break;
      }
      let validName = currentLine.match(patternName).join("");
      let validDistance = currentLine.match(patternDistance).reduce((a, b) => {
        return Number(a) + Number(b);
      });
  
      if (leaderboard.hasOwnProperty(validName)) {
        leaderboard[validName] += Number(validDistance);
      }
    }
    let sortedLeaderBoard = Object.entries(leaderboard).sort(([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    });
    console.log(`1st place: ${sortedLeaderBoard[0][0]}`);
    console.log(`2nd place: ${sortedLeaderBoard[1][0]}`);
    console.log(`3rd place: ${sortedLeaderBoard[2][0]}`);
  }
  solve([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&^%$ch123o!#$%#nne787) ",
    "%$$B(*&&)i89ll)*&) ",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma10**$#g0g0g0i0e",
    "end of race",
  ]);
  