var arg1 = parseFloat(prompt("Digite o número 1"));
var arg2 = parseFloat(prompt("Digite o número 2"));
var arg3 = parseFloat(prompt("Digite o número 3"));

function maior (n1,n2,n3){
    maior = Math.max(n1, n2, n3);
    menor = Math.min(n1, n2, n3);
    document.write("Os númros digitados foram: ", n1, " ", n2, " ", n3, " " ,"<br>O maior é ",maior, "<br> O menor é ", menor)
    
}

maior(arg1,arg2,arg3)
