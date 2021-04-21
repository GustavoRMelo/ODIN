const sumAll = function(primeiro, segundo) {
    if(primeiro>0 && segundo>0 && Number.isInteger(primeiro) && Number.isInteger(segundo)){
        
        let resultadoPrimeiro = 0;
        let resultadoSegundo = 0;
        if (primeiro<segundo){
            for (i=0; i<=primeiro-1;i++){
                resultadoPrimeiro+=i;
            }
            for (j=0; j<=segundo;j++){
                resultadoSegundo+=j;
            }
        return resultadoSegundo-resultadoPrimeiro;
        } else {
            for (i=0; i<=primeiro;i++){
                resultadoPrimeiro+=i;
            }
            for (j=0; j<=segundo-1;j++){
                resultadoSegundo+=j;
            }
            return resultadoPrimeiro-resultadoSegundo;
        }
    } else {
        return "ERROR";
    }    
}

module.exports = sumAll
