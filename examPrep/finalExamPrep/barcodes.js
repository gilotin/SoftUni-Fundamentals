function barcodes(data) {
  let regex = /@#+(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm;
  let numOfBarcodes = data.shift();
  let group = "";
  for (let i = 0; i < numOfBarcodes; i++) {
    let line = data.shift();
    let barcode = line.match(regex);
    if ((barcode = line.match(regex))) {
      barcode = barcode.toString().split("");
      for (let el of barcode) {
        if (!isNaN(el)) {
          group += el;
        } else {
          continue;
        }
      }
      if (group === "") {
        group = "00";
      }
      console.log(`Product group: ${group}`);
      group = "";
    } else {
      console.log("Invalid barcode");
    }
  }
}
barcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
barcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
