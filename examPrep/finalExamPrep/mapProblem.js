function mapProblem(data){

    let pattern = /([=|\/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g
    let sum = 0;
    let destinationList = [];    
    let current = pattern.exec(data)
    
    while(current !== null){
       let destination = current.groups.destination;
       sum += Number(destination.length)
       destinationList.push(destination)
    current = pattern.exec(data)  
    }
    console.log(`Destinations: ${destinationList.join(', ')}`);
    console.log(`Travel Points: ${sum}` )
}
mapProblem(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));