aluno1 = "Marcelly";
aluno2 = "Sidnei";
aluno3 = "Arthur";

n1_marcelly = 7;
n2_marcelly = 3;
n3_marcelly = 4;

n1_Sidnei = 7;
n2_Sidnei = 9;
n3_Sidnei = 8;

n1_Arthur = 10;
n2_Arthur = 9,5;
n3_Arthur = 9,2;

somanotas_aluno1 = n1_marcelly+n2_marcelly+n3_marcelly;
somanotas_aluno2 = n1_Sidnei+n2_Sidnei+n3_Sidnei;
somanotas_aluno3 = n1_Arthur+n2_Arthur+n3_Arthur;

media_aluno1 = somanotas_aluno1/3;
media_aluno2 = somanotas_aluno2/3;
media_aluno3 = somanotas_aluno3/3;



document.writeln("A aluna "+ aluno1 +" obteve as notas: " + n1_marcelly +", " + n2_marcelly + ", " + n3_marcelly + ". Sua média final foi " + media_aluno1.toFixed(2) + " - ",(media_aluno1 >= 7 ? "Aprovado.":"Reprovado."));

document.writeln("<br/>O aluno " + aluno2 + " obteve as notas: " + n1_Sidnei + ", " + n2_Sidnei + ", " + n3_Sidnei + ". Sua média final foi " + media_aluno2.toFixed(2) + " - ", (media_aluno2 >= 7 ? "Aprovado.":"Reprovado."));

document.writeln("<br/>O aluno " + aluno3 + " obteve as notas: " + n1_Arthur + ", " + n2_Arthur + ", " + n3_Arthur + ". Sua média final foi " + media_aluno3.toFixed(2) + " - ", (media_aluno3 >= 7 ? "Aprovado.":"Reprovado."));
