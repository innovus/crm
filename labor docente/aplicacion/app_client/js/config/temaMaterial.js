
(function(){
    angular
    .module('laborAcademica',['ngMaterial'])
    .config(temaMaterial);

    temaMaterial.$inject= ["$mdThemingProvider"];
    function temaMaterial($mdThemingProvider){
    	$mdThemingProvider.theme('default')
	    .primaryPalette('pink')
	    .accentPalette('orange');

	    $mdThemingProvider.alwaysWatchTheme(true);
    }
})();
