(function(){
  angular
    .module('tienda')
    .controller('detalleProductoController', detalleProductoController);

    detalleProductoController.$inject= ["$scope", "$routeParams", "productoService","SweetAlert"];
    function detalleProductoController ($scope,$routeParams,productoService,SweetAlert){
       
        $scope.productoid= $routeParams.productoid;
        $scope.producto= {};
        $scope.error=false;
        
        var init=function(){
        	productoService.findById($scope.productoid).success(function(producto){
        		$scope.producto=producto;
        	}).error(function(error){
        		 SweetAlert.swal("Error!", "No existe el producto seleccionado", "error");
        		 $scope.error=true;
        	});
        }; 
        init();
    }

})();

