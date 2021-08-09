var numero1=parseFloat(prompt("Digite um número:"));
var numero2=parseFloat(prompt("Digite outro número:"));
var numero3=parseFloat(prompt("Digite mais um número:"));

var potencia2 = 2;
var potencia3 = 3;
var potencia4 = 4;

// Math.pow(numero1,potencia2);
// Math.pow(numero2,potencia3);
// Math.pow(numero3,potencia4);


document.write(numero1, " elevado a ", potencia2, " é ", Math.pow(numero1,potencia2), "<br>");

document.write(numero2, " elevado a ", potencia3, " é ", Math.pow(numero2,potencia3), "<br>");

document.write(numero3, " elevado a ", potencia4, " é ", Math.pow(numero3,potencia4), "<br>");

document.write("A soma das potências ",potencia2, " ", potencia3," ",potencia4, " é ", (potencia2+potencia3+potencia4));

