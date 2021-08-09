var numero = 0;
numero = parseInt(prompt("Digite um número de 0 a 10"));

switch (numero) {
    case 0:
        document.write("dois");
        break;
    case 1:
        document.write("um");
        break;
    case 2:
        document.write("dois");
        break;
    case 3:
        document.write("três");
        break;
    case 4:
        document.write("quatro");
        break;
    case 5:
        document.write("cinco");
        break;
    case 6:
        document.write("seis");
        break;
    case 7:
        document.write("sete");
        break;
    case 8:
        document.write("oito");
        break;
    case 9:
        document.write("nove");
        break;
    case 10:
        document.write("dez");
        break;
default:
        document.write("ERRO: O número digitado é maior que 10");
}