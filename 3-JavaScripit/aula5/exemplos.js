raiz1 = Math.sqrt(9)
document.write("resultado de raiz <br>", raiz1)

raiz2 = Math.sqrt(25)
document.write(raiz2)//raiz

potencia1 = Math.pow(25,6)
document.write("<br resultado de potencia <br>",potencia1, "<br>")
// document.write("<br>", Math.round(potencia1))

potencia2 = Math.pow(2,2)
document.write("<br>", potencia2, "<br>")// potencia


num1=10.2;
document.write("<br> arredondamento p/ inteiro mais próximo <br>", Math.round(num1))

num2=10.8;
document.write("<br>", Math.round(num2), "<br>")//arredonda para o mais próximo

num3=10.8;
num4=5.3
document.write("<br> arredonda pra baixo <br>", Math.floor(num3), " - ", Math.floor(num4)) //arredonda pra baixo
document.write("<br> arredonda para o próximo inteiro <br>", Math.ceil(num3), " - ", Math.ceil(num4)) //arredonda para o próximo inteiro
document.write("<br> valor absoluto <br>", Math.abs(num3), " - ", Math.abs(num4)) //diferença do número e zero


document.write("<br> o maior valor de uma serie <br>", Math.max(20,30,50,80,5,2,3))
document.write("<br> o menor valor de uma serie <br>", Math.min(20,30,50,80,5,2,3))

document.write("<br> função com random e arredonamento ", Math.round(Math.random()*10))







