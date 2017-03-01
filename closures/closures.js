var incrementar = (function incrementar() {
	var valor = 0;
	
	return function() {
		return ++ valor;
	};

})();

console.log(incrementar());
console.log(incrementar());
