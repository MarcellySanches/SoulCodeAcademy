function primo (numero_digitado) {
    var resultado_validacao = false;

if (numero_digitado != 1){
    for(i=2;i<numero_digitado; i++) {

        if (numero_digitado % i == 0) {
            resultado_validacao = false;
            return resultado_validacao;
        }            
    }
    if (numero_digitado != 1) {
        resultado_validacao=true;
        return resultado_validacao;
    }
}    
}

var num1 = parseFloat(prompt("Digite um número"));
var resultadoDaFuncao = false; 

resultadoDaFuncao = primo(num1);

if(resultadoDaFuncao == true){
    resultado = Math.pow(num1,3);
}
else{
    resultado = "Não é Primo";
}

document.write(resultado);