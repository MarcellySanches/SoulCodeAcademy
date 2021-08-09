
num1=parseFloat(prompt("Digite o preço"));

function desconto(num1){  
    
    result=(num1*0.05);
    return result;
}


document.write("desconto de ",desconto(num1), " reais.");


