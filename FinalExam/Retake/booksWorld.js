function booksWorld(input) {
  let favoriteGenres = input.shift().split(" | ");

  let index = 0;
  while (input[index] !== "Stop!") {
    let [command, tokenOne, tokenTwo] = input[index].split(" ");
    let genre;
    let isIndexTwo = false;
    let isIndexOne = false;

    switch (command) {
      case "Join":
        genre = tokenOne;
        if (!favoriteGenres.includes(genre)) {
          favoriteGenres.push(genre);
        }
        break;
      case "Drop":
        genre = tokenOne;
        if (favoriteGenres.includes(genre)) {
          favoriteGenres.splice(favoriteGenres.indexOf(genre), 1);
        }
        break;
      case "Replace":
        let oldGenre = tokenOne;
        let newGenre = tokenTwo;
        if (favoriteGenres.includes(oldGenre) && !favoriteGenres.includes(newGenre)) {
          favoriteGenres.splice(favoriteGenres.indexOf(oldGenre), 1, newGenre);
        }
        break;
      case "Prefer":
        let genreIndex = Number(tokenOne);
        let genreIndexTwo = Number(tokenTwo);
        if (genreIndex <= favoriteGenres.length && genreIndex >= 0) {
          isIndexOne = true;
        }
        if (genreIndexTwo <= favoriteGenres.length && genreIndexTwo >= 0) {
          isIndexTwo = true;
        }
        if (isIndexOne && isIndexTwo) {
          let swap = favoriteGenres[tokenTwo];
          favoriteGenres[genreIndexTwo] = favoriteGenres[genreIndex];
          favoriteGenres[genreIndex] = swap;
        }
        break;
    }

    input[index];
    index++;
  }
  console.log(favoriteGenres.join(" "));
}
// booksWorld([
//   "Romance | Fiction | Horror | Mystery",
//   "Drop Romance",
//   "Join Fantasy",
//   "Prefer 1 2",
//   "Stop!",
// ]);

// booksWorld(["Poetry | Romance",
// "Drop Children",
// "Replace Fantasy Crime",
// "Stop!"])

booksWorld([
  "Thriller | Young | Crime",
  "Join Political",
  "Replace Young Fairytale",
  "Prefer 6 2",
  "Stop!",
]);
