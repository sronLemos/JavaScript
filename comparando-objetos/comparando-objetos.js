var joao = {
	nome: 'João',
	idade: 25,
	email: 'teste@email.com',
	igualA : function(obj) {
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email: 'teste2@email.com'
}

console.log(joao === maria);

console.log('Emails são iguais? ', joao.igualA(maria));