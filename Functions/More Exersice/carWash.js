function carWash(data){

    let progress = 0;
    for(operation of data){
        
        switch(operation){
            case "soap" : 
            progress += 10;
            break;
            case "water" :
                progress += progress * 0.2;
            break;
            case "vacuum cleaner" :
                progress += progress * 0.25;
                 break;
            case "mud" :
                progress -= progress * 0.1
                break;
        }
    }
    console.log(`The car is ${progress.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])