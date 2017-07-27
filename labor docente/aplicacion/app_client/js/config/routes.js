(function(){
    angular
    .module('laborAcademica')
    .config(config);
    
    config.$inject=['$routeProvider','$locationProvider'];
    function config($routeProvider, $locationProvider){
        $routeProvider
        .when('/',{
            templateUrl:'/js/components/listaDocente/listaDocente.template.html',
            controller:'listaDocenteCtrl'
        })
        .when('/laborAcademica',{
            templateUrl:'/js/components/laborAcademica/laborAcademica.template.html',
            controller:'laborAcademicaCtrl'
        })      
        .otherwise({redirectTo:"/"});
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
})();