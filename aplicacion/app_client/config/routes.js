(function(){
    angular
    .module('udenar')
    .config(config);
    
    config.$inject=['$routeProvider','$locationProvider'];
    function config($routeProvider, $locationProvider){
        $routeProvider
        .when('/',{
            templateUrl:'/views/home/home.template.html',
            controller:'homeCtrl'
        })
        .when('/producto',{
            templateUrl:'/js/components/productos/producto.template.html',
            controller:'productoController',
            controllerAs:'hm'
        })
        .when('/subir',{
            templateUrl:'/js/components/subirarchivo/subirarchivo.template.html',
            controller:'SubirContoller'
        })
        .when('/detalle/:productoid',{
            templateUrl:'/js/components/detalleProducto/detalleProducto.template.html',
            controller:'detalleProductoController'
        })
        .otherwise({redirectTo:"/"});

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
})();