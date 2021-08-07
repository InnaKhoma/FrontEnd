const arr = [[1, 2, 3], [4, 5], [6]];

function arraySum(arr){
    let counter = 0;
    for(let i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            counter += arraySum(arr[i]);
        } else {
            counter += arr[i];
        }
    }
    return counter;
}

console.log(arraySum(arr));
console.log(arr.flat().reduce((total, amount) => total + amount));