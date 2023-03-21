let resultado = (num1, num2) => {

    do {

        resto = num1 % num2;

        num1 = num2;

        num2 = resto;

    } while (resto != 0);

    return num1;

}

console.log("O MDC de 66 e 93 é: " + resultado(66,93));