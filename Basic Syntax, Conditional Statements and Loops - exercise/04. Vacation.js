function solve(num, type, day){
    let totalPrice = 0;
    
    if(type === 'Students') {
        switch(day){
            case 'Friday' : totalPrice = num * 8.45; break;
            case 'Saturday' : totalPrice = num * 9.80; break;
            case 'Sunday' : totalPrice = num * 10.46; break;
        }
        if (num >= 30){
            totalPrice *= 0.85
        }
    }else if(type === 'Business'){
        if(num >= 100){switch(day){
            case 'Friday' : totalPrice = (num - 10) * 10.90; break;
            case 'Saturday' : totalPrice = (num - 10)* 15.60; break;
            case 'Sunday' : totalPrice = (num - 10)* 16; break;
        }}else{
            switch(day){
                case 'Friday' : totalPrice = num * 10.90; break;
                case 'Saturday' : totalPrice = num * 15.60; break;
                case 'Sunday' : totalPrice = num * 16; break;
            }
        }
    }else if(type === 'Regular'){
        switch(day){
            case 'Friday' : totalPrice = num * 15; break;
            case 'Saturday' : totalPrice = num * 20; break;
            case 'Sunday' : totalPrice = num * 22.50; break;
        }if (num >= 10 && num <= 20){
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${(totalPrice).toFixed(2)}`)
}
solve(30,
    "Students",
    "Sunday"
    );