num1=parseFloat(prompt("Digite um número:"));
num2=parseFloat(prompt("Digite outro número:"));


function maior_menor(num1,num2) {
    if (num1>num2) {
        document.write(num1, " é maior que ", num2)
        
    } else if (num1==num2){
        document.write(num1, " e ", num2, " são iguais ")
    }     
    else if (num2>num1) {
        document.write(num2, " é maior que ", num1)        
    }    
}
maior_menor(num1,num2)


