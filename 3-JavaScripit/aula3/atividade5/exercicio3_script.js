cont_0_25=0;
cont_26_50=0;
cont_51_75=0;
cont_76_100=0;

for (i=1;i<=10;i++){

    numeros=parseFloat(prompt("Digite um número aleatório (positivo)"));
    
    if (numeros>=0 && numeros<=25) {
        cont_0_25+=1;
    } else if (numeros>=26 && numeros<=50) {
        cont_26_50+=1;
    } else if (numeros>=51 && numeros<=75) {
        cont_51_75+=1;
    } else if (numeros>=76 && numeros<=100) {
        cont_76_100+=1;
    } else if (numeros<0) {
        alert("ERRO: número negatrivo é inválido nesta condição");
    }
}

document.write("<br>qtd 0-25: ",cont_0_25);
document.write("<br>qtd 26-50: ",cont_26_50);
document.write("<br>qtd 51-75: ",cont_51_75);
document.write("<br>qtd 76-100: ",cont_76_100);
