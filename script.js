// const cave1 = {
//     a: {
//         a: 1,
//         b: 2,
//         c: {
//             a: 1,
//             c: {
//                 a: 1,
//                 b: {
//                     h: 1,
//                 },
//             },
//         },
//     },
//     d: 34,
//     b: {
//         a: false,
//         b: false,
//     },
//     c: {
//         a: false,
//         b: false,
//         a: {
//             a: 1,
//             b: 2,
//             c: {
//                 a: 1,
//                 c: {
//                     a: 1,
//                     b: {
//                         h: 1,
//                     },
//                 },
//             },
//         },
//     },
// }

// const cave2 = {
//     a: {
//         a: 1,
//         b: 2,
//         c: {
//             a: 1,
//             c: {
//                 a: 1,
//                 b: {
//                     h: 1,
//                 },
//             },
//         },
//     },
//     d: 34,
//     b: {
//         a: false,
//         b: false,
//     },
//     c: {
//         a: false,
//         b: false,
//         a: {
//             a: 1,
//             b: 2,
//             c: {
//                 a: 1,
//                 c: {
//                     a: 1,
//                     b: {
//                         h: 1,
//                     },
//                 },
//             },
//         },
//     },
// }



const cave1 = {
    a: 1,
    b: 2,
    c: {
        a: 2,
        b: 2,
        e: {
            a:3,
            // b:2,
        },
    },
    b: 3,
    m: 3,
}

const cave2 = {
    a: 2,
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

let id = 0;
let max = 1;


const deepWay = (object) => {
    
    // let id = 0;
    for (const key in object) { 
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if(element !== null && typeof element === 'object') {
                id++;
                deepWay(element);
                // console.log(id);
                if (max <= id ) {
                    max = id;
                }
                // console.log(max);
                id = 0;
            } 
        }
        // if (max < id) max = id;
    }   
    return max;
}

console.log(deepWay (cave1));

let res = 0;

const noСoincidence = (object1, object2) => {
    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            const element1 = object1[key];
            const element2 = object2[key];
            if(element1 !== null && typeof element1 === 'object') {
                noСoincidence(element1, element2);
            } else if (element1 != object2[key]) {
                res++;
            }
        }
}   
    return res;
}

console.log(noСoincidence(cave1, cave2));
