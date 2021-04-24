const leapYears = function(ano) {
    let teste4 = ano%4;
    let teste100 = ano%100;
    let teste400 = ano%400;
    if (teste4===0 && teste100===0 && teste400===0){
        return true;
    } else if(teste4===0 && teste100!==0){
        return true;
    } else{
        return false;
    }
}

module.exports = leapYears
