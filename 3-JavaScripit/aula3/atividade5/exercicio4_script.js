cont_menor18=0;
cont_maior18=0;
idade=0;


for (i=1;i<=10;i++){

    idade=parseFloat(prompt("Digite idade da pessoa "+i));
    
    if (idade>=0 && idade<18) {
        cont_menor18+=1;
    } else if (idade>=18 && idade<150) {
        cont_maior18+=1;
    
    } else {
        alert("ERRO: esse número não é uma idade aceita");
    }
}

document.write("<br>qtd maiores de idade: ",cont_maior18);
document.write("<br>qtd menores de idade: ",cont_menor18);

