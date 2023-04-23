function retornaSoma(mul1, mul2, min, max) {
    var soma = 0
    for (let i = min; i < max; i++) {
        resto1 = i % mul1
        resto2 = i % mul2
        if (resto1==0 || resto2==0) {
            soma = soma + i
        }
    }
    return soma;
}

module.exports = retornaSoma;

num1 = 6
num2 = 93
min = 1
max = 1000

console.log("A soma dos múltiplos de "+num1+" e "+num2+" entre "+min+" e "+max+" é: " + (retornaSoma(num1,num2,min,max)));