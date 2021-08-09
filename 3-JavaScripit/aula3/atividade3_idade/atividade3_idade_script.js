idade=0
do {    
    //idade = parseFloat(prompt("Digite sua idade:"));
    validou = false;
    idade = prompt("Digite a sua idade:");
    //usei isso aqui pra verificar se a variavel idade só continha numeros
    if(!isNaN(idade)){
        idade = parseFloat(idade);
        if(Number.isInteger(idade)){
            if(idade > 0){
                validou = true;      
            }
        }
    }else{
        alert('Digite apenas números');
    }
} while (!validou)

document.write(idade);