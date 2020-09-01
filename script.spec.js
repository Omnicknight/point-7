describe('funcrions', () => {
    describe('results', () => {
        it('should show deepest way', () => {
            expect(results(cave1)).to.equal(2);
        });
    });
    describe('result', () => {
        it('should show no coincidence', () => {
            const a = {
                f: 3,
                g: 4,
            };
            const b = {
                f: 4,
                g: 3,
            };
            expect(result(cave1, cave2)).to.equal(4);
        });
    });
})    


