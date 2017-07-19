(function(){
    angular
      .module("tienda")
      .service("marcaService", marcaService);

    marcaService.$inject=['$http','autenticacion','CONFIG'];
    function marcaService($http, autenticacion, CONFIG){
        var darMarcas= function(){
            return $http.get(CONFIG.http_address+"/api/marca");
        };

        return {
            darMarcas:darMarcas
        };
    }
})();
