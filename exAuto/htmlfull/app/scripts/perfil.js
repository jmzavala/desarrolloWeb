/*global $ */
var perfiles = (function () {

    return{
        get: function(cb){
            'use strict';
            var endpoint = 'http://localhost:3000';
            console.log(endpoint);
            $.get(endpoint + '/')
                .done(function (response) {
                    if (response.status === 1) {
                        return cb(null, response.users);
                    } else {
                        console.log('Error');
                        return cb('error');
                    }
                })
                .fail(function (err) {
                    console.log(err);
                    return cb('error');
                });
        },
        run: function(e){
            perfiles.get(function (err, data) {
                if (!err) {
                    var content = '';
                    var cantidad = data.length || 0;
                    content = '<table>';
                    var i;
                    for (i = 0; i < cantidad; i += 1) {
                        if (i % 2 === 0) {
                            content = content + '<tr> <td>' + data[i].nombre + ' ' + data[i].apellido + '<td></tr>';
                        } else {
                            content = content + '<tr class="li_background"> <td>' + data[i].nombre + ' ' + data[i].apellido + '<td></tr>';
                        }
                    }
                    content = content + '</table>';
                    e.html(content);
                }
            });
        }
    }
}());



$(document).ready(function () {
    'use strict';
    perfiles.run($('#lista'));  
});
