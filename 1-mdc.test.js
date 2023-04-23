const mdc = require('./1-mdc')

describe('Teste mdc', () => {
    it('indice', () => {
        expect(mdc(6,93)).toBe(3)
        expect(mdc(1,93)).toBe(1)
        expect(mdc(8,94)).toBe(2)
        expect(mdc(24,39)).toBe(3)
        })
});
