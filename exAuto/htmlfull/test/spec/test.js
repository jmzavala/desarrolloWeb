/* global describe, it*/
(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });

  describe('Obtención de temas', function () {
    it('Se obtiene el arreglo de temas', function () {
        var _temas = temas.get();
            expect(_temas).to.have.length(4);
    });
    it('Se agrega al div', function () {
        var div = $('<div id="lista"> </div>');
            temas.run(div);
        var lista = div.find("li");
        expect(lista).to.have.length(4);
    });
  });

    describe('Obtención de perfiles', function () {
    it('Se obtiene el arreglo de temas', function () {
        var _temas = temas.get();
            expect(_temas).to.have.length(4);
    });
    it('Se agrega al div', function () {
        var div = $('<div id="lista"> </div>');
            temas.run(div);
        var lista = div.find("li");
        expect(lista).to.have.length(4);
    });
  });


})();
