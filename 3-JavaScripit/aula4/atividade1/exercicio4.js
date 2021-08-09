idade=0;

nascimento=parseInt(prompt("Digite seu ano de nascimento"));

function maioridade(nascimento){  
    idade=2021-nascimento;

    if (idade>=18){
        document.write("maior de idade")
    } else {
        document.write("menor da idade")
    }    
}
maioridade(nascimento);
