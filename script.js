const cave1 = {
    a: 2,
    b: 2,
    c: {
        a: 1,
        b: 1,
        e: {
            a:2,
            // b:2,
        },
    },
    b: 3,
    m: 3,
}

const cave2 = {
    a: 1,
    b: 2,
    c: {
        a: 2,
        b: 2,
        e: {
            a:3,
        },
    },
    b: 3,
    m: 3,
}

// let id = 0;
// let max = 1;

const results = (first) => {
    let id = 0;
    let max = 1;
    const deepWay = (object) => {
    
        for (const key in object) { 
            if (object.hasOwnProperty(key)) {
                const element = object[key];
                if(element !== null && typeof element === 'object') {
                    id++;
                    // console.log(id);
                    deepWay(element);
                    if (max <= id ) {
                        max = id;
                    }
                    // id = 0;
                } 
            }
        }   
        return max;
    }
    deepWay(first);
    return max;
}



console.log(results (cave1));


const result = (first, second) => {
    let res = 0;
  
    const noСoincidence = (object1, object2) => {
        for (const key in object1) {
            if (object1.hasOwnProperty(key)) {
                const element1 = object1[key];
                const element2 = object2[key];
                if(element1 !== null && typeof element1 === 'object') {
                    noСoincidence(element1, element2);
                } else if (element1 != element2) {
                    res++;
                };
            };
        };
        return res;
    }
    noСoincidence(first, second);
    // console.log(res);
    return res;
}

console.log(result(cave1, cave2));