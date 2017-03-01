
var ativo = true;
console.log(typeof ativo);

if (0) {
	console.log('0 é true');
} else {
	console.log('0 é false');
}

//Falsos
/*
!!0
!!''
!!NaN
!!null
!!undefined
!!false
*/

//Exemplo
var nome = '';
if(!nome) { 
	console.log('Informe o nome');
}