//===================NOSSA PRIMEIRA IMPLEMENTAÇÃO======================
// numero=0;
// fatorial=0;
// numero = parseInt(prompt("Digite um número inteiro"));
// aux=0;

// if(numero==0 || numero==1) {
//     document.write(numero,"!=1")
// } else {
//     for(i=1;i<=(numero-1);i++) {
//         if (i==1) {    
//             fatorial=numero;
//             aux=numero;
//             document.write(fatorial, `! = ${fatorial} X `);
//         }
//         fatorial=fatorial*(aux-1);
//         if(i != (numero-1)) document.write(aux - 1," X ");
//         else document.write(aux - 1, " = ");
        
//         aux=aux-1;       
//     }  
//     document.write(fatorial);
// }


//===================IMPLEMENTAÇÃO DO PROFESSOR FELIPE======================
// var valor = 0,
// total = 0;

// valor = parseInt(prompt("Digite um número inteiro"));
// if(valor == 0){
//     document.write(numero,"!=1");
// }else{
//     total = valor;
//     document.write(valor, `! = ${valor} X`);
//     for(i = 1; i< valor; i++){
//         total *= valor - i;
//         if(i != valor-1) document.write(valor - i," X ");
//         else document.write(valor - i, " = ");
//     }
//     document.write(total);
// }


//======================MELHORIA NOSSA========================
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