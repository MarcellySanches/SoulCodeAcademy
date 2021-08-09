qtd=0;
numeros=0;
soma=0;
cont_positivo=0;
cont_negativo=0;

qtd=parseInt(prompt("Digite a quantidade de entradas"))

for (i=1;i<=qtd;i++){

    numeros=parseFloat(prompt("Digite um número aleatório (positivo ou negativo)"));
    soma+=numeros;

    if (numeros>0) {
        cont_positivo+=1;
    } else {
        cont_negativo+=1;
    }
}

document.write("<br>A média destes números é ",soma/qtd);
document.write("<br>Quantidade de números positivos: ", cont_positivo);
document.write("<br>Quantidade de números negativos: ", cont_negativo);