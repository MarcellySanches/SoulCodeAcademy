maior_altura=0;
menor_altura=0;

for(i=1;i<=15;i++){
    altura_digitada=parseFloat(prompt("Insira sua altura em cm (exemplo: 169cm)"));  
    if (i==1) {
        maior_altura=altura_digitada;
        menor_altura=altura_digitada;
    }
        if(altura_digitada>maior_altura) {
            maior_altura=altura_digitada;
        }
        if(altura_digitada<menor_altura) {
            menor_altura=altura_digitada;
        }
}

document.write("Maior altura é ", maior_altura);
document.write("<br>Menor altura é ", menor_altura)