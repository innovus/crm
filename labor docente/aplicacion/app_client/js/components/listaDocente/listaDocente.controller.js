/**
 * @file controlador para la hoja de vida del empleado
 * @name listaDocente.controller.js
 * @author Jorge Luis Viveros - Juan Carlos Pantoja
 * @license Udenar
 * @copyright 21/07/2017 Udenar
 **/

/**
 * controlador donde cargara el listado de docentes 
 * con las opciones de busqueda para seleccionar uno
 * y pase datos al controlador de laborAcademica
 *
 * @module laborAcademica
 */

(function() {


    angular
        .module('laborAcademica')
        .controller('listaDocenteCtrl', listaDocenteCtrl);

    listaDocenteCtrl.$inject = ['$scope', 'pasarDatos', '$compile', '$rootScope', 'autenticacion', '$location', '$timeout', 'SweetAlert', '$q','MensajesService' ];

    function listaDocenteCtrl($scope,pasarDatos, $compile, $rootScope, autenticacion, $location, $timeout, SweetAlert, $q , MensajesService) {

        /**
         * esta variable representa el titulo y el subtitulo de la pagina actual
         * @var {Object} titulo
         */
        $scope.titulo = {
            "titulo": "Listado Docentes",
            "subtitulo": "Escoge el docente  "
        }

        $scope.docentes = [{
            identificacion: "12994330",
            nombre_completo: "ALEXANDER BARON SALAZAR",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },{
            identificacion: "79457186",
            nombre_completo: "MANUEL ERNESTO BOLAÑOS GONZALES",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },
        {
            identificacion: "11344534",
            nombre_completo: "JAVIER ANDRES REVELO SANCHEZ",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },
        {
            identificacion: "127497979",
            nombre_completo: "JAVIER ANDRES SANTACRUZ SALCEDO ",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },
        {
            identificacion: "12958472",
            nombre_completo: "LUIS VICENTE CHAMORRO MARCILLO",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },
        {
            identificacion: "12967146",
            nombre_completo: "GUERRERO GARCIA JAIRO ANTONIO",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },
        {
            identificacion: "12967588",
            nombre_completo: "SILVIO RICARDO TIMARAN PEREIRA",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        },{
            identificacion: "12878462",
            nombre_completo: "NELSON ANTONIO JARAMILLO ENRIQUEZ",
            nom_dep:"Ingenieria de sistemas",
            vinculacion:"Tiempo Completo",
        }];

        /**
         * @ngdoc function
         * @name seleccionarDocente
         * @methodOf module.laborAcademica
         * @description recibe el docente y lo manda a labor academica
         */
        $scope.seleccionarDocente = (docente) => {

             pasarDatos.data =JSON.parse(JSON.stringify(docente));
             
            $location.url("/laborAcademica");

          
        };
        

    }
})();
