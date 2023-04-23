const {indiceMaiorValor, indiceMenorValor} = require('./2-indice')

describe('Teste Indice Menor e Maior Valor', () => {
    it('indice', () => {
        let array = [1382, 13, 74, 2390, 32, 93, 3984, 83, 31, 847, 9]
        expect(indiceMaiorValor(array)).toBe(6)
        expect(indiceMenorValor(array)).toBe(10)
        })  
});
