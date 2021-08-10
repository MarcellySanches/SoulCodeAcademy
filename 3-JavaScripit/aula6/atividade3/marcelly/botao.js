function aumenta_fonte() {
    var elemento = document.querySelector('.acessib_aumenta');
    var tamanho_fonte = getComputedStyle(elemento).fontSize;
    tamanho_atual = parseFloat(tamanho_fonte);
    elemento.style.fontSize = (tamanho_atual + 1) + 'px';              
}

function diminui_fonte() {
    var elemento = document.querySelector('.acessib_diminui');
    var tamanho_fonte = getComputedStyle(elemento).fontSize;
    tamanho_atual = parseFloat(tamanho_fonte);
    elemento.style.fontSize = (tamanho_atual - 1) + 'px';              
}