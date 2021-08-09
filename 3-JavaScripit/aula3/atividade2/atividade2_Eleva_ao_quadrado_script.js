var quadrado=0
count = 2;


while(count<=100) {

    if(count%2==0) {
        quadrado=count*count;
        document.write(quadrado," ");
        count+=2;
    }
}