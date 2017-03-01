var idade = 25;
console.log(typeof idade);

var preco = 14.99;
console.log(typeof preco);

//Problemas com precisão

var x = 0.3 - 0.2;
console.log(x);

//Solução
var z = (0.3 * 10 - 0.2 * 10) / 10;
console.log(z);

// Fim de problemas com precisão

//Funções 

var y = 10;
y.toString(2); //Transfomrar em binário
y.toString(16); //Transfomrar em hexadecimal
preco.toFixed(); //Arredondamento

//NaN
var i = 10/'cursos';
console.log(i); 

//Funciona! O javaScript consegue converter.
var n = 10/'2';
console.log(n);

