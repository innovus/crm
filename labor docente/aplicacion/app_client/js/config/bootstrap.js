

(function(){
    angular
    .module("laborAcademica")
    .run(run);

    function run($rootScope,autenticacion,CONFIG,$window){
        var token=autenticacion.getCookieToken();
        if(token){
            console.log("usuario autenticado");
        }
        else{
            console.log("usuario no autenticado");
            //$window.location=CONFIG;
        }
    }
})();