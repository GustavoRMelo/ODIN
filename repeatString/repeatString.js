const repeatString = function(palavra, vezes) {
    var resultado = "";
    
    if (palavra === ""){
        return "";
    } else if (vezes<0){
        return "ERROR";
    }else{
        for (i=0;i<vezes;i++){
            resultado += palavra;
        }
    return resultado;
    }
}

module.exports = repeatString
