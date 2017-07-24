(function(){
  angular
    .module('tienda')
    .directive('uploaderModel', uploaderModel);

    uploaderModel.$inject=["$parse"];
    function uploaderModel($parse){
    	return {
    		restrict:'A',
	    	link: function(scope,iElement,iAttrs)
            {
	    		iElement.on("change",function(e){
	    			$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);	
	    		});
	    	}
    	}
    }
})();    