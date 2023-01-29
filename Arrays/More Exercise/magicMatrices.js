function magicMatrices(matrice) {
    for (let i = 0; i < matrice.length; i++) {
        let sumROne = matrice[i].reduce((a, b) => a + b, 0);
        //console.log(matrice[i][0])
        let sumRTwo = matrice[i + 1].reduce((a, b) => a + b, 0);
       // let sumRThree = matrice[i + 2].reduce((a, b) => a + b, 0);

        let sumCOne = 0;
        let sumCTwo = 0;
        let sumCThree = 0;

        for (let j = 0; j < matrice.length; j++) {
            sumCOne += matrice[i][j];
            sumCTwo += matrice[i + 1][j];
           // sumCThree += matrice[i + 2][j]
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo /*|| sumRThree !== sumCThree*/) {
            return false;
        }else {
            return true;
        }
    }

}
console.log(magicMatrices([[1, 0],
    [0, 1],
    ]));


