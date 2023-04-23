let mdc = (num1, num2) => {

    do {

        resto = num1 % num2;

        num1 = num2;

        num2 = resto;

    } while (resto != 0);

    return num1;

}

module.exports =  mdc;
num1 = 6
num2 = 93

console.log("O MDC de "+num1+" e "+num2+" é: " + mdc(num1,num2));