const sum = (a, b) => a + b;

let topPC = {
    RAM: 32,
    GC: 'RTX 2080',
    CPU: 'i7 8700k',
    power: 1000,
    a: {
        b: 2,
        t: 3,
    }
}

let topPC2 = {};

function createCopy(newObj, obj) {

    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return console.log(newObj);
}

createCopy(topPC2, topPC);
const copy = (object) => {
    const newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            newObj[key] = element;
        }
    }
    return newObj;
};


const cave = {
    a: {
        a: 1,
        b: false,
    },
    b: {
        a: false,
        b: false,
    },
}

const deepCopy = (object) => {
    const newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if(element !== null && typeof element === 'object') {
                newObj[key] = deepCopy(element)
            } else
            newObj[key] = element;
        }
    }
    return newObj;
}

const newCave = copy(cave);

cave.a.a = 'abc';

console.log(newCave.a.a === cave.a.a);

// console.log(newCave, cave);