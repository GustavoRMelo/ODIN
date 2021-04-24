const ftoc = function(tempF) {
  var num = (tempF - 32)*(5/9);
  if (Number.isInteger(num)){
    return num;
  } else{
    return parseFloat(num.toFixed(1));
  }
}

const ctof = function(tempC) {
  var num = tempC * 9 / 5 + 32;
  if (Number.isInteger(num)){
    return num;
  } else{
    return parseFloat(num.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
