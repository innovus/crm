(function(){

    angular
      .module("udenar")
      .service("AcuerdoService", acuerdoService);

    acuerdoService.$inject=['$http','autenticacion',"CONFIG","$filter"];
    function acuerdoService($http, autenticacion,CONFIG,$filter){

        var findAll= function(){
            return $http.get(CONFIG.http_address+"/api/acuerdo"/*,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} }*/);
        };

        var findById=function(idAcuerdo){
            return $http.get(CONFIG.http_address+"/api/acuerdo/"+idAcuerdo/*,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} }*/);
        };

        var createAcuerdo=function(acuerdo){
            //return $http.post(CONFIG.http_address+"/api/acuerdo", acuerdo,/*{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} }*/)
             return $http({
                method: 'POST',
                url: CONFIG.http_address + '/api/acuerdo',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization' : 'Bearer '+autenticacion.getToken(),
                },
                data: acuerdo
            })
        }
        var updateAcuerdo = function(idacuerdo, acuerdo){
            //return $http.put(CONFIG.http_address+"/api/acuerdo/"+idacuerdo,acuerdo,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} })
            return $http({
                method: 'PUT',
                url: CONFIG.http_address + '/api/acuerdo'+idAcuerdo,
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization' : 'Bearer '+autenticacion.getToken(),
                },
                data: acuerdo
            })
        }
        var deleteAcuerdo = function(idAcuerdo){
            return $http.delete(CONFIG.http_address+"/api/acuerdo/"+idAcuerdo,null/*,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} }*/);
        }

        return {
            findById:findById,
            findAll:findAll,
            createAcuerdo:createAcuerdo,
            updateAcuerdo:updateAcuerdo,
            deleteAcuerdo:deleteAcuerdo
        };
    }
})();
