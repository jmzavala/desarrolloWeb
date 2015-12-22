/*global $*/
var temas = (function () {
    'use strict';
    return {
        get: function () {
            return ['npm', 'grunt', 'Angular', 'Mmongodb'];
        }, 
        run : function (e) {
            var data = temas.get(),
                content = '',
                cantidad = data.length || 0,
                i;
            content = '<ul>';
            for (i = 0; i < cantidad; i += 1) {
                content = content + '<li>' + data[i] + '</li>';
            }
            content = content + '</ul>';
            e.html(content);
        }
    };
}());

$(document).ready(function (){
    'use strict';
    temas.run($('#lista'));
});
