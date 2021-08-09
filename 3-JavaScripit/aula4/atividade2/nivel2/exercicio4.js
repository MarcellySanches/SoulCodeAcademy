function numeroPerfeito(num) {
    var somatorio = 0;
  
    for (i = 1; i <= (num / 2); i++) {
      
        if (num % i == 0) {
            somatorio += i;
        }
    }
  
    return somatorio == num;
}

function TestaInteiro(){
    var num_entrata = parseFloat(prompt("Digite um número"));
    for(j=1; j<=num_entrata; j++){
        if(numeroPerfeito(j)){
            document.write(j+ " ");
        }
    }
}

TestaInteiro();