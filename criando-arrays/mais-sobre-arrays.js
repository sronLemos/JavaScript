var emails = [];
console.log(emails);
console.log(emails.length);	

emails.push('joao@email.com');//Adiciona no final
console.log(emails);
emails.push('maria@email.com');
console.log(emails);
emails.push('jose@email.com');
console.log(emails);

emails.pop();//Remover fim
console.log(emails);

var e = emails.pop();
console.log(e);

//Inserir no inicio
emails.unshift('teste@email.com');
console.log(emails);

//Remover do inicio
emails.shift();
console.log(emails);