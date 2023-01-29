function sortingArrByCriteria(array) {
  array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(array.join("\n"));
}
sortingArrByCriteria(["alpha", "beta", "gamma"]);
