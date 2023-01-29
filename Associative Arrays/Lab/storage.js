function storage(data){
    let result = new Map();

    for(let line of data){
        let [product, quantity] = line.split(' ');

        if(result.has(product)){
            let oldQuantity = result.get(product);
            result.set(product, Number(oldQuantity) + Number(quantity));
        }else{
            result.set(product, Number(quantity));
        }
    }
    for(let [key, value] of result.entries()){
        console.log(key, '->',value)
    }

}
storage(['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40']
)