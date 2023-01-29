function radioCrystals(data) {
    let index = 0;
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;

    let endThickness = data.shift();

    for (el of data) {
        let startingThickness = Number(el);
        console.log(`Processing chunk ${startingThickness} microns`);

        while (startingThickness !== endThickness) {

            while (startingThickness / 4 >= endThickness) {
                startingThickness /= 4;
                cutCounter++;
            }
            if (cutCounter > 0) {
                console.log(`Cut x${cutCounter}`);
                console.log(`Transporting and washing`);
                startingThickness = Math.floor(startingThickness);
                cutCounter = 0;
            }

            while (startingThickness * 0.8 >= endThickness) {
                startingThickness *= 0.8;
                lapCounter++;
            }
            if (lapCounter > 0) {
                console.log(`Lap x${lapCounter}`);
                console.log(`Transporting and washing`);
                startingThickness = Math.floor(startingThickness);
                lapCounter = 0;
            }

            while (startingThickness - 20 >= endThickness) {
                startingThickness -= 20;
                grindCounter++;
            }

            if (grindCounter > 0) {
                console.log(`Grind x${grindCounter}`);
                console.log(`Transporting and washing`);
                startingThickness = Math.floor(startingThickness);
                grindCounter = 0;
            }

            while (startingThickness > endThickness) {
                startingThickness -= 2;
                etchCounter++;
            }

            if (etchCounter > 0) {
                console.log(`Etch x${etchCounter}`);
                console.log(`Transporting and washing`);
                startingThickness = Math.floor(startingThickness);
                etchCounter = 0;
            }

            while(startingThickness < endThickness && xRayCounter === 0) {
                startingThickness += 1;
                xRayCounter++;
            }
        }
        if (xRayCounter > 0) {
            console.log(`X-ray x${xRayCounter}`);
        }
        console.log(`Finished crystal ${startingThickness} microns`);
    }
}

radioCrystals([1375, 50000]);
//radioCrystals([1000,4000, 8100]);
