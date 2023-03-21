function retornaSoma(num1, num2) {
    var soma = 0
    for (let i = 1; i < 1000; i++) {
        resto1 = i % num1
        resto2 = i % num2
        if (resto1==0 || resto2==0) {
            soma = soma + i
        }
    }
    return soma;
}

console.log(9%3);
console.log("A soma dos múltiplos de 5 e 7 abaixo de 1000 é: " + (retornaSoma(5,7)));