var salario = 0;
var plano=0;
var salario_novo=0;


salario = parseFloat(prompt("Digite seu sálario"));
plano = prompt("Agora, digite o seu plano de trabalho: A, B ou C");

switch (plano) {
    case "A":
        salario_novo=(salario*0.10)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
    case "a":
        salario_novo=(salario*0.10)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
    case "B":
        salario_novo=(salario*0.15)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
        case "b":
        salario_novo=(salario*0.15)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
    case "C":
        salario_novo=(salario*0.20)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
        case "c":
        salario_novo=(salario*0.20)+salario;
        document.write("Novo sálario: ",salario_novo);
        break;
default:
        document.write("ERRO: este não é uma plano válido.");
}