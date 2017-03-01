var fox = {
	cor: 'preta',
	modelo: 'fox',
	fabricante: 'VW'
}
console.log('fox', fox);
console.log('cor', fox.preta);

fox.cor = 'branco';
console.log('cor2', fox.cor);

console.log('modelo', fox['modelo']);

fox.peso = 1100;
console.log('fox', fox);

fox.ligar = function() { 
	console.log('Ligando o carro!');
};

console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro!');
	}
}

console.log('celta', celta);