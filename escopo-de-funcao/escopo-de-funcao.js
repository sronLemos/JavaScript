var nome = 'curso'; //GLOBAL

var capitalizar = function() {
	//LOCAL
	var nome = 'curso'.toUpperCase();
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
	nome = 'curso'.toUpperCase();
	nome2 = 'Curso'; // GLOBAL SEM VAR
}

capitalizar2();
console.log('nome2', nome);
console.log('global', nome2);nome