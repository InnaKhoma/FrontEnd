function arrayFill(value, number){
    let arr = [];
    for(let i=0; i < number; i++){
        arr[i] = value;
    }
    return arr;
}

console.log(arrayFill('x', 5));