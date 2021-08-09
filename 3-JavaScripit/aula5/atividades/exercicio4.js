var numero1=parseFloat(prompt("Digite um número:"));
var n_aleatorio = Math.random()*1000;


var absoluto1=Math.abs(numero1);
var absoluto2=Math.abs(n_aleatorio);


document.write("<br>O número digitado foi ", numero1, "<br> O número randomico é ", n_aleatorio);
document.write("<br>Absoluto de ", numero1, " é ", absoluto1, "<br>Absoluto de ", n_aleatorio, " é ", absoluto2, "<br>");

