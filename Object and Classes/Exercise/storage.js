function storeProvision(stock, loadingStock) {
  let stockLength = stock.length;
  let loadStockLength = loadingStock.length;

  let storage = {};

  for (let i = 0; i < stockLength; i += 2) {
    let product = stock[i];
    storage[product] = Number(stock[i + 1]); 

  }

  for (k = 0; k < loadStockLength; k += 2) {
    let product = loadingStock[k];
    if (!storage.hasOwnProperty(loadingStock[k])) {
      storage[product] = 0;
    }   
    storage[product] += Number(loadingStock[k + 1]);
  }

  for( let product in storage){
    console.log(`${product} -> ${storage[product]}`)
  }

}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
