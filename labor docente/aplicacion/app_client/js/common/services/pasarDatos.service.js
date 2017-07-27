(function(){

    /**
     * @ngdoc service
     * @name pasarDatos.service: pasarDatos
     * @description 
     * 
     * servicio que permite la comunicacion entre servicios
     */
    angular
    .module("laborAcademica")
    .factory("pasarDatos", pasarDatos);

    pasarDatos.$inject= [];
    function pasarDatos(){

        return {
    		data: {}
  		};  
    }
})();