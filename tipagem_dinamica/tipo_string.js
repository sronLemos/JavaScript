var x ='curso'; //Pode usar aspas simples ou dupla
console.log(x);

//Atributo
console.log(x.length);

//Funções
var a = 'curso';
var b = 'curso';

console.log(a===b); //Comparação

var m = 'Seja bem vindo';
console.log(m.indexOf('vindo')); //Busca o primeiro com este parâmetro na string
console.log(m.lastIndexOf('a')); //Busca o ultimo com este parâmetro na string


var s = 'a arte de programar';
console.log(s.substring(2, 6)); //Recorta a string, retornando uma nova string
console.log(s.slice(-17, -13)); // Pode contar de tras para frente
console.log(s.substr(2, 4)); // A partir da posição do 2 caracteres "pegar" 4 caracteres

var r = 'Seja bem vindo <nome>!';
console.log(r.replace('<nome>', 'Sron')); //Substitui

console.log(r.toUpperCase()); //Todas as letras maiusculas
console.log(r.toLowerCase()); //Todas as letras minusculas

//Concatenar
var v = 'Olá' + ' ' + 'Teste';
console.log(v);

var c = 'Olá'.concat('', 'Teste');//Concatanação com concat
console.log(c.charAt(4));//Caracter nesta posicao


