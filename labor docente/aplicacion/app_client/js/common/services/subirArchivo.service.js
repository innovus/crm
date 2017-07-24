(function(){

    angular
      .module("tienda")
      .service("subirService", subirService);

    subirService.$inject=['$http','$q','CONFIG','autenticacion'];
    function subirService($http,$q,CONFIG,autenticacion){

        var subirArchivo=function(nombre,file){
             var defer= $q.defer();
             var formData= new FormData();
             formData.append("nombre",nombre);
             formData.append("archivo",file);
             console.log(formData);
             
             return $http.post(CONFIG.http_address+"/api/subirarchivo",formData,{ 
                    headers:{
                            "Content-type" : undefined,
                            "Authorization" : 'Bearer '+autenticacion.getToken()
                    },
                    transformRequest: angular.identity 
             }).success(function(res){
                defer.resolve(res);
             }).error(function(error,code){
                defer.reject(error);
             });

             return defer.promise;

        };

        return {
            subirArchivo:subirArchivo
        };
    }
})();
