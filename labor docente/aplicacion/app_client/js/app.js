(function(){

    /**
     * @ngdoc object
     * @name compras
     * @description
     * 
     * Este es el modulo princpial de la aplicacion, hace uso de ngRoute y ngSanitize
     */
    angular.module('laborAcademica',
    	[
    		'ngRoute',
        	'ngSanitize',
        	'ngCookies',
    		'oitozero.ngSweetAlert',
    		'pascalprecht.translate',
    		'angularUtils.directives.dirPagination',
    		'ui.bootstrap',
            'ngMaterial',
            'ngMessages'
            ]);
})();
