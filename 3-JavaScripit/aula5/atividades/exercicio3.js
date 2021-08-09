var numero1=parseFloat(prompt("Digite um número:"));
var numero2=parseFloat(prompt("Digite outro número:"));

var dividendo = Math.max(numero1,numero2);
var divisor =Math.min(numero1,numero2);

function divisao(dividendo, divisor) {
   
    resultado=Math.floor(dividendo/divisor);
    return resultado;    
}


document.write("O dividendo é ", dividendo, "<br>");

document.write("O divisor é ", divisor, "<br>");

document.write("O resultado de ", dividendo, " por ", divisor, " é ", divisao(dividendo, divisor), "<br>");


