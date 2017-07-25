(function(){
  angular
    .module('laborAcademica')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject=['$scope','autenticacion','$location'];
    function homeCtrl ($scope,autenticacion,$location){
       $scope.titulo={
         "titulo":"Modulo Demo",
         "subtitulo":"Modulo test de la arquitectura"
       };
       var irProductos= function(){
          $location.path('/producto');
       };
       var irArchivo= function(){
          $location.path('/subir');
       }

       $scope.irProductos=irProductos;
       $scope.irArchivo=irArchivo;
    }

})();
