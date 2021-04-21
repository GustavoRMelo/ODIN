const reverseString = function(palavra) {
    var resultado = "";
    var tamanho = palavra.length;
    for (let i=tamanho;i>=0;i--){
        resultado+=palavra.charAt(i);
    }
    return resultado;
}

module.exports = reverseString
