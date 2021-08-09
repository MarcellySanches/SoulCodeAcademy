
var total=0;

item = prompt("Digite o código do item");
qtd = parseInt(prompt("Digite a quantidade deste item"));

switch (item) {
    case "100":
        total=qtd*1.20;
        document.write("Foram ", qtd," cachorro(s) quente(s), totalizando ", total, " reais");
        break;
    case "101":
    total=qtd*1.30;
    document.write("Foram ", qtd," baurus(s) simples(s), totalizando ", total, " reais");
    break;
    case "102":
    total=qtd*1.50;
    document.write("Foram ", qtd," baurus(s) com ovos, totalizando ", total, " reais");
    break;
    case "103":
    total=qtd*1.20;
    document.write("Foram ", qtd," hamburguer(s), totalizando ", total, " reais");
    break;
    case "104":
    total=qtd*1.30;
    document.write("Foram ", qtd," cheeseburguer(s), totalizando ", total, " reais");
    break;
    case "105":
    total=qtd*1.00;
    document.write("Foram ", qtd," refrigerante(s), totalizando ", total, " reais");
    break;
   
default:
        document.write("ERRO: este não é uma plano válido.");
}