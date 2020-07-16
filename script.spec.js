describe('funcrions', () => {
    describe('deepWay', () => {
        it('should show deepest way', () => {
            expect(deepWay(cave1)).to.equal(2);
        });
    });
    describe('noCoincidence', () => {
        it('should show no coincidence', () => {
            expect(noСoincidence(cave1, cave2)).to.equal(1);
        });
    });
})    


