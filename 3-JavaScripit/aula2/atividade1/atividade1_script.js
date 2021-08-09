// ATIVIDADE 1
document.write("1) Faça um script que mostre na tela se um número é positivo, negativo ou nulo (zero)<br/>"); 
var num1 = 0;
num1=prompt("Exercicio 1 positivo, negativo ou nulo - Digite um número qualquer:");

if(num1>0) {
    document.write(num1, " é positivo!");
} else if(numero<0) {
    document.write(num1, " é negativo!");
} else {
    document.write(num1, " é nulo!");
}

// ATIVIDADE 2
document.write("<br/> 2) Faça um script que mostre na tela se um número é par ou ímpar<br/>");

var num2 = 0;
num2 = prompt("Exercicio 2 par ou ímpar - Digite outro número qualquer:");

if(num2%2==0){
    document.write(num2, " é par.");
} if(num2%2!=0) {
    document.write(num2, " é ímpar.");
}

// ATIVIDADE 3
document.write("<br/> 3) Elabore um script sobre calculo de pagamento <br/>");

var valor_do_produto = 0;
var forma_pgto = 0;
var total_a_pagar=0;

valor_do_produto =prompt("Exercicio 3 - Insira o valor que está na etiqueta:");
forma_pgto = prompt("Exercicio 3 - Digite: 1 para pagamento à vista no cartão ou cheque | 2 para pagamento no dinheiro | 3 para parcelar em duas vezes | 4 para parcelar em três vezes");

if(forma_pgto==1) {
    total_a_pagar = parseFloat(valor_do_produto)-(valor_do_produto*0.10);
    document.write("O valor do produto é ", valor_do_produto,", e o total a pagar é ", total_a_pagar,".");
} if (forma_pgto==2) {
    total_a_pagar = parseFloat(valor_do_produto)-(valor_do_produto*0.15);
    document.write("O valor do produto é ", valor_do_produto,", e o total a pagar é ", total_a_pagar,".");
} if (forma_pgto==3) {
    parcela = parseFloat(valor_do_produto/2);
    document.write("O valor total do produto é ", valor_do_produto,", parcelaremos em  2x de ", parcela," reais .");
} if (forma_pgto==4) {
    juros = parseFloat(valor_do_produto*0.10);
    total_juros = parseFloat(parseFloat(valor_do_produto)+juros);
    parcela = parseFloat(total_juros/3);
    document.write("O valor do produto é ", valor_do_produto,", parcelaremos em  3x com 10% de juros. As parcelas ficarão ", parcela," reais .");
}


// ATIVIDADE 4
document.write("<br/> 4) Crie um Script que tenha dois números e mostre o maior deles, ou se eles são iguais. <br/>");

var num3
var num4

num3=prompt("Exercicio 4 maior, menor ou igual - Digite um numero:")

num4=prompt("Exercicio 4 maior, menor ou igual - Digite um numero:")

if(num3>num4) {
    document.write(num3, " maior que ", num4);
} else if ( num3<num4){
    document.write(num4, " maior que ", num3);
} else {
    document.write(num3, " são iguais ", num4);
}


document.write("<br/> 4) Script que tenha uma variável com a idade de uma pessoa e que verifique se ela é obrigada a votar seguindo as condições. <br/>");

var idade = 0;

idade=prompt("Qual a sua idade?");

if(idade=>70) {
    document.write(idade," anos, voto não obrigatório");
} else if(idade=>18) {
    document.write(idade," anos, voto obrigatório");
} else if(idade=>16) {
    document.write(idade," anos, voto opcional");
} else {
    document.write(idade," anos, não pode votar");
}

