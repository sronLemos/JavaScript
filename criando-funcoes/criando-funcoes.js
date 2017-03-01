//function declaration
function somar(a, b){
	return a + b;
}

//function expression
var subtrair = function(a, b) {
	return a - b;
}

var resultadoSoma = somar(2, 3);
console.log('2 + 3 =', resultadoSoma);

var resultadoSubtracao = subtrair(6, 2);
console.log('6 - 2 =', resultadoSubtracao);