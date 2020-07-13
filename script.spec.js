describe('sum', () => {
    it('should sum two values', () => {
        expect(sum(5,2)).to.equal(7);
    });
})

// describe('strSum', () => {
//     it('should sum proparty', () => {
//         expect(strSum(topPC)).to.equal(4);
//     });
// })

// describe('createCopy ', () => {
//     it('should create copy object', () => {
//         let topPC2 = {
//             RAM: 32,
//             GC: 'RTX 2080',
//             CPU: 'i7 8700k',
//             power: 1000,
//         }
//         expect(createCopy(topPC2, topPC)).to.not.equal(topPC, topPC2);
//     })
// });

describe ('dunctions' , () => {
    describe('sum', () => {
        it('should sum two values', () => {
            expect(sum(5,2)).to.equal(7);
        });
    });
    describe('copy', () => {
        it('should create new object', () => {
            const obj = {
                a: 2,
                b: 3,
            };
            expect(copy(obj)).not.equal(obj);
        });
        it('should create copy of object', () => {
            const obj = {
                a: 2,
                b: 3,
            };
            expect(copy(obj)).to.deep.equal(obj);
        });
    });
    describe('deepCopy', () => {
        it('should deep copy of object', () => {
            const obj = {
                a: {
                    a: 2,
                },
                b: {
                    b: 3,
                },
            };
            const objectCopy = deepCopy(obj);

            expect(objectCopy.a).not.equal(undefined);
        });
        it('should deep copy of object', () => {
            const obj = {
                a: {
                    a: 2,
                },
                b: {
                    b: 3,
                },
            };
            const objectCopy = deepCopy(obj);

            expect(objectCopy.a).not.equal(obj.a);
        });
    });    
});