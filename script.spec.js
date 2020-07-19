describe('funcrions', () => {
    describe('deepWay', () => {
        it('should show deepest way', () => {
            expect(deepWay(cave1)).to.equal(2);
        });
    });
    describe('noCoincidence', () => {
        it('should show no coincidence', () => {
            const a = {
                f: 3,
                g: 4,
            };
            const b = {
                f: 4,
                g: 3,
            };
            expect(noСoincidence(a, b)).to.equal(2);
        });
    });
})    


