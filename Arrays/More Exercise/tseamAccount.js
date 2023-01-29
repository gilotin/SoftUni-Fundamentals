function tseamAccount(data) {
    let gameList = data.shift().split(" ");
    let index = 0;
    let command = data[index];
    index++;
    while (command !== "Play!") {
        let [action, game] = command.split(" ");

        switch (action) {
            case "Install":
                if (!gameList.includes(game)) {
                    //     command = data[index];
                    //     index++;
                    //     continue;
                    // }else{
                    gameList.push(game);
                }
                break;
            case "Uninstall":
                if (gameList.includes(game)) {
                    gameList.splice(gameList.indexOf(game), 1);
                }
                break;
            case "Update":
                if (gameList.includes(game)) {
                    gameList.splice(gameList.indexOf(game), 1);
                    gameList.push(game);
                }
                break;
            case "Expansion":
                let [updatedGame, expansion] = game.split("-");
                if (gameList.includes(updatedGame)) {
                    gameList.splice(gameList.indexOf(updatedGame) + 1, 0, `${updatedGame}:${expansion}`);
                }
                break;
        }
        command = data[index];
        index++;
    }

    console.log(gameList.join(' '));
}
// tseamAccount([
//     "CS WoW Diablo",
//     "Install LoL",
//     "Uninstall WoW",
//     "Update Diablo",
//     "Expansion CS-Go",
//     "Play!",
// ]);

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)