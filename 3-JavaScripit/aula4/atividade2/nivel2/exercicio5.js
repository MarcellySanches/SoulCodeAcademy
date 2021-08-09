function VerificaArg(arg) {
    if(arg > 0)
    return 'P';
    else 
    return 'N'
}


var num_entrata = parseFloat(prompt("Digite um número"));

document.write(VerificaArg(num_entrata));