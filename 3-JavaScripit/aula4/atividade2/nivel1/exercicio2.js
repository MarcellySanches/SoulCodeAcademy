numero1=parseFloat(prompt("Digite um número:"));

numero2=parseFloat(prompt("Digite outro número:"));

var divisao = 0;
result_1 = 0;

var multiplicacao = function(numero1,numero2) {
    result_1 = numero1*numero2;
    return result_1
    
}
divisao = multiplicacao(numero1,numero2)/2;

document.write("O resultado de ", numero1, "x",numero2, " divido por 2 é ", divisao);

