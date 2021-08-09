numero1 = parseFloat(prompt("Digite um número que será o dividendo"));
numero2 = parseFloat(prompt("Digite um número que será o divisor"));


function divisao (numero1, numero2){
    return  numero1/numero2;     
}

document.write("o resultado de ", numero1, " por ", numero2, " é ", divisao(numero1,numero2), ".");