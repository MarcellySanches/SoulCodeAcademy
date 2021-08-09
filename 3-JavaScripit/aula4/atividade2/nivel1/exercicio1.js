numero=parseFloat(prompt("Digite um número:"))

function multiplo_5(numero){
    if(numero % 5 == 0) {
        document.write(numero, " é multiplo de 5.");
    } else {
        document.write(numero, " não é multiplo de 5.");
    }    
}
multiplo_5(numero)
