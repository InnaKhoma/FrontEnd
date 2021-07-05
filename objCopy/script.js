const obj = {name: 'Alina', age: 23, adress: { country: 'UA', city: 'Kyiv'}};

function copy(obj){
    const objNew = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            objNew[key] = copy(obj[key]);
        } else if (Array.isArray(obj[key])) {
            objNew[key] = Array.from(obj[key]);
        } else {
            objNew[key] = obj[key];
        }
    }

    return objNew;
}

const objCopy = copy(obj);
console.log(obj);
console.log(objCopy);