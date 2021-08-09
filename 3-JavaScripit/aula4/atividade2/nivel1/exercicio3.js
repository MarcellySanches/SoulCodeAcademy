sexo1=prompt("Digite F para feminimo e M para masculino");

function sexo(sexo1) {      
        switch (sexo1) {
            case "f":
                document.write("é feminino"); 
                break;
            case "F":
                document.write("é feminino"); 
                break;
            case "m":
                document.write("é masculino"); 
                break;
            case "M":
                document.write("é masculino"); 
                break;    
            default:
                alert ("Sexo inválido, tente novamente");
    }
}
sexo(sexo1);