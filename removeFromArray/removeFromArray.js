function removeFromArray(lista,...names) {
    for (i=0; i< names.length;i++){
        if (lista.indexOf(names[i])!== -1){
            lista.splice(lista.indexOf(names[i]),1);
        } else {
            continue;
        }
    }
    return lista;
}

module.exports = removeFromArray
