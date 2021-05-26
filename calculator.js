function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (toSum) {
	var result = 0;
	for (let number in toSum){
		result +=toSum[number];
	}
	return result;
}

function multiply (toMultiply) {
	var result = 1;
	for (let number in toMultiply){
		result *=toMultiply[number];
	}
	return result;
}

function power(a,b) {
	var result = a;
	for (i=1;i<b;i++){
		console.log(result *= a);
	}
	return result;
}

function factorial(a) {
	if (a===0){
		return 1;
	} else if (a===1){
		return 1;
	} else{
		let result = 1;
		while (a!=0){
			result *= a;
			a--;
		};
		return result;
	};	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}