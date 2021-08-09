//Exercício 01
//a.

var multiplicacao=0;
multiplicacao=10*5;

document.write("<br>Exercício 1)a)<br>");
document.write("10x5 é ", multiplicacao);

//b.
var divisao=0;
divisao=10/2;

document.write("<br><br>Exercício 1)b)<br>")
document.write("10/2 é ", divisao);

//c.
var modulo=0;
modulo=18%9;

document.write("<br><br>Exercício 1)c)<br>")
document.write("18%9 é ", modulo);

//d. 
var x=5;
var y=10;
var x=y+x;

document.write("<br><br>Exercício 1)d)<br>");
document.write("x é ",x );

//e.
var x=10;
var y=5;
var x=x*y;

document.write("<br><br>Exercício 1)e)<br>")
document.write("x é ",x );



//Exercício2
document.write("<br><br>Exercício 2)<br>")
document.write("resposta b");




// //Exercício3
document.write("<br><br>Exercício 3) Feito, porém comentado.<br>");

// //DO-WHILE
// count1=3;

// do {
//     document.write(count1, " ");
//     count1=count1+3;
// }while(count1<100);

// //WHILE
// count2=2
// while(count2<=100){
//     document.write(count2," ");
//     count2=count2+2;
// }

//FOR
// var mult=2
// for (i=1; i < 100; i++) {
//     if (mult%2==0) {
//         document.write(mult, " é par ");        
//     } else {
//         document.write(mult, " é ímpar ");
//     } 
//     mult=mult+1;    
// }



//exemplo 5
document.write("Exemplo  - multiplos de 4.1<br>");

for(i=1;i<=0<;i++;) {
    document.write(i, " ");
}



// //Exercício4
// document.write("<br><br>Exercício 4)<br>")
// document.write(" ");



//Exercício5
document.write("<br><br>Exercício 5)<br>");

num1=parseInt(prompt("Digite um número (exercício 5)"));
num2=parseInt(prompt("Digite outro número (exercício 5"));

document.write("O primeiro número digitado está na variável num1 = ", num1);
document.write("<br>O segundo valor digitado está na variável num2 = ", num2);

aux=num1;
num1=num2;
num2=aux;
document.write("<br>Agora num1 = ", num1);
document.write("<br>Agora num2 = ", num2);



//Exercício 6
document.write("<br><br>Exercício 6)<br>feito");

function myFunction() {
    alert("Olá Mundo (exercício 6)");    
}
myFunction();



//Exercício7
document.write("<br><br>Exercício 7)<br>");

numero_mult = parseFloat(prompt("Digite um número (para o exercício 7)"));

function mult(numero_mult) {
    result_mult = numero_mult*2;
    result_potencia = Math.pow(result_mult,2);
    return result_potencia;
}

document.write("O resultado é ", mult(numero_mult));



//Exercício8
//a.
document.write("<br><br>Exercício 8)a)<br>");

n_aleatorio = Math.random()*100;
document.write("número aleatorio", n_aleatorio);

//b.
document.write("<br><br>Exercício 8)b)<br>");
var numero_qualquer= 2.2;
num_round = Math.round(numero_qualquer);

document.write("Arredondamos com a função Math.round o número ", numero_qualquer, " para ", num_round);

//c.
document.write("<br><br>Exercício 8)c)<br>");
var numero9= 9;
num_raiz = Math.sqrt(numero9);

document.write("Com a função Math.sqrt extraimos a raiz de ", numero9, " que é ", num_raiz);




//Exercício9
document.write("<br><br>Exercício 9) Sobre Um alert Hello World ou Goodbye<br>feito!");
x=3;
y=0;

if (x>y) {
    alert("Hello World (exercício 09)")
    
} else {
    alert("Goodbye (exercício 09)")
    
}



//Exercício10
document.write("<br><br>Exercício 10)<br>");

var fruta = "maca"; //coloque banana ou maça

switch (fruta) {
    case "banana":
        alert("Olá (exercício 10)");
    case "maca":
        alert("Bem-vindo (exercicío 10)");

    default:
        break;
}










