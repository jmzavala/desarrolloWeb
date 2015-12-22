var temas = (function(){
	return {
		get: function (){
			return ['npm','grunt','Angular','Mmongodb']
		}
	}
}());


 $( document ).ready(function(){
 	var data = temas.get(),
 		content = '',
 		cantidad = data.length||0;
 		content = '<ul>';

 		for (i=0;i<cantidad; i+=1){
 				content = content+ '<li>'+data[i]+'</li>';
 			}
 			content = content+'</ul>';
 		$("#lista").html(content);
 });