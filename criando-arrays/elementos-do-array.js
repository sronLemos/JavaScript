var acessorio = {som: 'pioneer', banco: 'couro'};

var ligar = function(){
	console.log('Ligando o carro');
}

var fox = ['Fox', 4,  acessorio, ligar];

console.log(fox);
fox[3]();