//exemplo1
count = 1;
while(count<=1000){
    document.write(count," ");
    count++;
}

document.write("<br><br>")

//exemplo2
count2=1;
do{
    document.write(count2, " ");
    count2++;
} while(count2<=100);

document.write("<br><br>")


//exemplo 3
document.write("Exemplo 3 - multiplos de 2 ao quadrado<br>")

count3=2;
do{    
    document.write(count3*count3, " ");
    count3++;
} while(count3<=100);

document.write("<br><br>") 

//exemplo 4
document.write("Exemplo  - multiplos de 4<br>")

count4=3;

do {
    document.write(count4, " ");
    count4+=3;
}while(count4<100);

//exemplo 4.1
document.write("Exemplo  - multiplos de 4.1<br>")

count4=3;

do {
    if(count4%3==0) {
        document.write(count4, " ");
        count4++;
    }    
}while(count4<100);

//exemplo 5
document.write("Exemplo  - multiplos de 4.1<br>")

for(i=1;i<=0<;i++;) {
    document.write(i, " ");
}
