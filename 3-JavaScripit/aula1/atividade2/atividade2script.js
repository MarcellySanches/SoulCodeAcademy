idade_filho = 2;
idade_mae = 30;

idade_pai = 58;

idade_irmao1 = 10;
idade_irmao2 = 26;
idade_irmao3 = 29;
irmaos1 = idade_irmao1+idade_irmao2+idade_irmao3 // 65
irmaos2 = irmaos1*idade_mae

renda_familiar = 100;
qtd_familia = 3;
per_capita = renda_familiar/qtd_familia;

idade_item1 = idade_mae+idade_filho; //32
idade_item2 = idade_item1*idade_pai; // 32*58=1856
idade_item3 = irmaos2/idade_item1;
renda_item4 = per_capita*30;



document.write("1. Meu filho tem ", idade_filho+ " anos e eu tenho ", idade_mae+ " anos. A soma das nossas idades é ", idade_item1, ".<br/>");

document.write("2. Minha idade somada a do meu filho é " + idade_item1 + ". Multiplicar este resultado a idade do pai é "+ idade_item2 + ".<br/>");

document.write("3. A soma da idade dos meus irmãos é " + irmaos1 + ". Multiplicando este valor pela minha idade e dividindo por " + idade_item1 +  " é ", idade_item3,".<br/>");

document.write("4. A renda familiar é " + renda_familiar + " reais, dividido por " + qtd_familia + " pessoas, que compõem família, e multiplicado por 30 é " + (Math.trunc(renda_item4)) + ".");

// Marcelly Monteiro