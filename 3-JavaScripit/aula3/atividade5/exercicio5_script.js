count=0;
soma=0;

for(i=1;i<=500;i++) {
    if(count % 3 == 0 && count % 2 != 0) {
        soma=soma+count;
        count=count+1;
    } else {
        count=count+1;
    }    
}
document.write(soma);