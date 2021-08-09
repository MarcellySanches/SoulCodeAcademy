//IMC
var peso=0;
var altura=0;//em cm
var IMC=peso/(altura^2);
document.write("<br/>");

peso=prompt("Digite seu peso:");
altura=parseFloat(prompt("Digite sua altura:"));

if (IMC>30) {
    document.write("<br/> Obeso");
} else if (IMC>25) {
    document.write("<br/> Acima do Peso");
} else if (IMC>=18.5) {
    document.write("<br/> Peso normal");
} else if (IMC<18.5) {
    document.write("<br/> Abaixo do peso");
}




