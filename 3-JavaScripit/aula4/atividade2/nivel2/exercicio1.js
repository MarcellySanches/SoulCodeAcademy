function soma(num1, num2, num3) {
    resultado_soma=num1+num2+num3;
    return resultado_soma
    
}

function media() {
    resultado_media= soma(arg1,arg2,arg3)/3; 
    return resultado_media.toFixed(2);
}

var arg1 = parseFloat(prompt("Digite o número 1"));
var arg2 = parseFloat(prompt("Digite o número 2"));
var arg3 = parseFloat(prompt("Digite o número 3"));

resultado_conta = media();
document.write(resultado_conta);