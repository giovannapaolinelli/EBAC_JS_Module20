function indiceMaiorValor() {
    let maior = array[0];
    let indice = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        }
    }
    return indice;
}

function indiceMenorValor() {
    let menor = array[0];
    let indice = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            indice = i;
        }
    }
    return indice;
}

module.exports = {indiceMaiorValor, indiceMenorValor};

let array = [1382, 13, 74, 2390, 32, 93, 3984, 83, 31, 847, 9];
console.log("O índice de maior valor é: " + (indiceMaiorValor(array)));
console.log("O índice de menor valor é: " + (indiceMenorValor(array)));