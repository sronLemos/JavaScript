var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

console.log('joao', joao);
console.log('cidade', joao.endereco.cidade);

console.log(joao.endereco.cep);

console.log('estado', joao['endereco']['estado']);