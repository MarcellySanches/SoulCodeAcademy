var mes = 0;
mes = parseInt(prompt("Escreva um mês do ano digitando 1 a 12 (exemplo: Para Janeiro digite 1):"));

switch (mes){
    case 1:
        document.write("Janeiro tem 31 dias");
        break;
    case 2:
        document.write("Fevereiro tem 28 dias");
        break;
    case 3:
        document.write("Março tem 31 dias");
        break;
    case 4:
        document.write("Abril tem 30 dias");
        break;
    case 5:
        document.write("Maio tem 31 dias");
        break;
    case 6:
        document.write("Junho tem 30 dias");
        break;
    case 7:
        document.write("Julho tem 31 dias");
        break;
    case 8:
        document.write("Agosto tem 31 dias");
        break;
    case 9:
        document.write("Setembro tem 30 dias");
        break;
    case 10:
        document.write("Outubro tem 31 dias");
        break;
    case 11:
        document.write("Novembro tem 30 dias");
        break;
    case 12:
        document.write("Dezembro tem 31 dias");
        break;
default:
    document.write("ERRO: digite um número válido de 1 a 12.");
}

