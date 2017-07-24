(function(){

    angular
      .module("tienda")
      .service("productoService", productoService);

    productoService.$inject=['$http','autenticacion',"CONFIG","$filter"];
    function productoService($http, autenticacion,CONFIG,$filter){

        var darProductos= function(){
            return $http.get(CONFIG.http_address+"/api/producto",{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} });
        };

        var findById=function(identificador){
            return $http.get(CONFIG.http_address+"/api/producto/"+identificador,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} });
        };

        var create=function(producto){
            return $http.post(CONFIG.http_address+"/api/producto", producto,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} })
        }
        var editar = function(idProducto, producto){
            return $http.put(CONFIG.http_address+"/api/producto/"+idProducto,producto,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} })
        }
        var eliminar = function(idProducto){
            return $http.delete(CONFIG.http_address+"/api/producto/"+idProducto,null,{ headers:{Authorization : 'Bearer '+autenticacion.getToken()} });
        }

        return {
            findById:findById,
            darProductos:darProductos,
            create:create,
            editar:editar,
            eliminar:eliminar
        };
    }
})();
