function teste (){
    alert("Olá Pessoal")
    
}

function imc(peso, altura) {
    var result = peso / (altura*altura)
    return result
}

peso = 50;
altura = 1.70;

aux=imc(peso,altura);
document.write(imc(peso,altura));

console.log(aux);

function imprime (texto) {
    document.write("Olá " + texto);
}


imprime("marcelly");

function soma (num1,num2) {
    return num1+num2
}

alert(soma(4,16));



//EXEMPLO FUNÇÃO ANÔNIMA
var idade = function() {
    while(true) {
        a = parseInt(prompt("Digite a sua idade"));
        if (a== "" || isNaN(a))
            alert("Digite um valor válido")
        else
            break;
    }
    return a;
}

for(i=0<10;i++){
    document.write(idade()," "); //CHAMA A VARIAVEL IDADE, QUE CHAMA A FUNÇÃO PELOS (), QUE RETORNA O "A"
}