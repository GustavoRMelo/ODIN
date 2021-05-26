const palindromes = function(text) {
    let texto = removeAcento(text);
    texto = texto.toLowerCase();
    texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    texto = Array.from(texto);
    texto = texto.filter((item) => item != ' ');
    let texto2 = [...texto];
    texto2 = texto2.reverse();
    const teste = arraysMatch(texto,texto2);
    return teste;


    function removeAcento (text)
    {       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;                 
    };
    function arraysMatch(arr1, arr2) {

        // Check if the arrays are the same length
        if (arr1.length !== arr2.length) return false;
    
        // Check if all items exist and are in the same order
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
    
        // Otherwise, return true
        return true;
    
    };
    
};

module.exports = palindromes
