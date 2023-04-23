const retornaSoma = require('./3-soma')

describe('Teste Soma', () => {
    it('soma de dois valores', () => {
        expect(retornaSoma(2,3,1,10)).toBe(32)
        expect(retornaSoma(5,8,1,10)).toBe(13)
        expect(retornaSoma(5,8,1,1000)).toBe(149500)
        expect(retornaSoma(2,5,1,100)).toBe(2950)
        })
});
