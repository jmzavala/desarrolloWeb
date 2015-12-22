var getPerfiles = function(cb){
	var endpoint="http://localhost:3000";
	console.log(endpoint);
	$.get(endpoint+'/')
	.done(function(response) {
	if (response.status === 1){			
		return cb(null,response.users);		
	}else{
		console.log("Error");
		return cb('error');
	}
	})
	.fail(function(err) {
		console.log(err);
		return cb('error');
	});
};
 

 $( document ).ready(function(){
 	getPerfiles(function(err, data){
 		var content="";
 		if (!err){

 			var cantidad = data.length||0;

 			content = '<ul>';
 			for (i=0;i<cantidad; i+=1){
 				content = content+ '<li>'+data[i].nombre+ ' '+data[i].apellido+'</li>';
 			}
 			content = content+'</ul>';
 		}
 		console.log(content);
 		$("#lista").html(content);
 	});
 });