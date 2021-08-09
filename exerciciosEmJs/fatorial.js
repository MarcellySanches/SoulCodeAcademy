numero=0;
fatorial=0;
numero = parseInt(prompt("Digite um número inteiro"));
aux=0;

if(numero==0 || numero==1) {
    document.write(numero,"!=1")
} else {
    for(i = 1; i<numero; i++) {
        if (i==1) {    
            fatorial=numero;
            document.write(fatorial, '! = ',fatorial,' X ');
        }
        fatorial=fatorial*(numero-i);
        if(i != (numero-1)) 
            document.write(numero - i," X ");
        else 
            document.write(numero - i, " = ");
    }  
    document.write(fatorial);
}
