var num = parseInt(prompt("Digite o número inteiro positivo"));
function primo (numero_digitado) {
    resultado_validacao=false;
    if (numero_digitado != 1){      
    
        for(i=2;i<numero_digitado; i++) {

            if (numero_digitado % i == 0) {
                return resultado_validacao = false; 
            }          
        }   
        if(numero_digitado != 1){
            resultado_validacao  = true;
            return resultado_validacao;
        }                 
    }
}
for (j = 1; j<= num; j++) {
    if(primo(j) == true ){

        document.write(j + " ");

    }
}