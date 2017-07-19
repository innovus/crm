(function(){
    angular.module("udenar").controller("navigationCtrl",navigationCtrl);

    navigationCtrl.$inject=["$location","$window", 'autenticacion','$cookieStore','$log','CONFIG'];

    function navigationCtrl($location,$window,autenticacion,$cookieStore,$log,CONFIG){
        
        var navvm=this;
        navvm.currentPath= $location.path();
        navvm.isLoggedIn= false;
        navvm.currentUser=null;
        navvm.rutaInicio=CONFIG.http_seguridad;
        navvm.opciones=null;

        var init= function(){
            
            autenticacion.isLoggedIn(function(data,error){
                if(error){
                    $log.log(error);
                }
                else if(data){
                    navvm.currentUser=data;
                    navvm.isLoggedIn=true;
                    autenticacion.obtenerRutas().success(function(data){
                         $log.debug(data);
                         navvm.opciones=data;
                    }).error(function(error){
                         console.log(error);
                         $log.debug(error);   
                    });
                }    
            });
        };
      

        navvm.logout=function(){
            autenticacion.logout().success(function(data){
                if($cookieStore.get("udenar")){
                  $cookieStore.remove("udenar");
                }
                else{
                    console.log("no existe la cookie");
                }
                $window.location="http://localhost:4000";
            }).error(function(data){
                alert("hubo un error en la cerrada  de la sesion");    
            });

            
        };

        /*navvm.tienehijos= function(opcion){
           var bandera= false; 
           if(opcion.hijos){
               if(opcion.hijos.length>0){
                   bandera=true;
               }
           }
           return bandera;
        };*/

        init();
    }

})();