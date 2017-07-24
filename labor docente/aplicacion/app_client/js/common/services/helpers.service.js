(function(){
    angular
      .module("tienda")
      .service("helpersService", helpersService);

    helpersService.$inject=['CONFIG','$q'];
    function helpersService(CONFIG,$q){
        var verificarArchivo= function(file,tipo){
            var def=$q.defer();
            var blob= file;
            var fileReader = new FileReader();
            
            fileReader.onloadend = function(e) {
              var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
              var header=""
              for(var i = 0; i < arr.length; i++) {
                 header += arr[i].toString(16);
              }
              console.log(header);	
              switch(tipo){
            	case CONFIG.tipo_pdf:
            		if(CONFIG.cabecera_pdf===header){            			
            			def.resolve("correcto")
            		}
            		else{
            			def.reject("archivo corrupto")
            		}
            		break;
              };
            };
            fileReader.readAsArrayBuffer(blob); 
            return def.promise;
        };	

        return {
            verificarArchivo:verificarArchivo
        };
    }	
})();
