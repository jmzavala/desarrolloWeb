var global = (function (){

	console.log("soy un script que debe estar en todas las páginas");

	return {
		user: function(){
			//ir a donde se guardan el user y retornar
			return 'Pedrito';
		},
		permisos: function(){
			//retornar los permisos dependiendo de donde sean guardados.
			return {rol:'admin', permisos:['escribir','borrar','todo']};
		}
	}	
}());