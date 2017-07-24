(function(){
  angular
    .module('tienda')
    .controller('SubirContoller', SubirContoller);

    SubirContoller.$inject=["$scope","autenticacion","$location","$log","$uibModal","SweetAlert","helpersService","CONFIG","subirService"];
    function SubirContoller ($scope,autenticacion,$location,$log,$uibModal,SweetAlert,helpersService,CONFIG,subirService){
      
    	var onSubmit=function(){
    		var name=$scope.nombre;
    		var file=$scope.file;

            helpersService.verificarArchivo(file,CONFIG.tipo_pdf).then(function(data){
                
                subirService.subirArchivo(name,file).then(function(resultado){
                    console.log(resultado);
                    SweetAlert.swal("Exito!", "Su archivo ha sido guardado en el servidor", "success");
                }).catch(function(error){
                    console.log(error);
                    SweetAlert.swal("Error!", error, "error");
                });
                
            }).catch(function(error){
                SweetAlert.swal("Error!", error, "error");
            });
            //----------------------------------------------------------
            /*var blob= file;
            var fileReader = new FileReader();
            fileReader.onloadend = function(e) {
              var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
              var header = "";
              for(var i = 0; i < arr.length; i++) {
                 header += arr[i].toString(16);
              }
              
            };
            fileReader.readAsArrayBuffer(blob);    */


    	};

		$scope.onSubmit=onSubmit;        
    }
})();    