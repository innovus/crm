/**
 * @file controlador para la hoja de vida del empleado
 * @name hojadevida.controller.js
 * @author Felipe Roa - Hamilton Arce
 * @license Udenar
 * @copyright 21/07/2017 Udenar
 **/

/**
 * controlador para la hoja de vida del empleado
 * como su informacion personal, formacion academica,
 * nucleo familiar, idioma extrajero, experiencia laboral
 *
 * @module hojaDeVidaCtrl
 */

(function() {

    angular
        .module('laborAcademica')
        .controller('laborAcademicaCtrl', laborAcademicaCtrl);

    laborAcademicaCtrl.$inject = ['$scope', '$sce', '$compile', '$rootScope', 'autenticacion', '$location', '$timeout', 'SweetAlert', '$q' ];

    function laborAcademicaCtrl($scope, $sce, $compile, $rootScope, autenticacion, $location, $timeout, SweetAlert, $q) {

        /**
         * esta variable representa el titulo y el subtitulo de la pagina actual
         * @var {Object} titulo
         */
        $scope.titulo = {
            "titulo": "Labor Academica",
            "subtitulo": "Juan carlos Pantoja"
        }

        $scope.periodo_tipo ="Semestre";
        $scope.laborDocencia ={};
        $scope.modalInvestigacion = {}
       // $scope.modalAsignatura ={tipo:1,}

        /**
         * contiente las tabs que componen la pagina de hoja de vida
         * Datos personales, Nucleo Familiar, Formacion, Experiencia laboral
         * @var {Object} tabs
         */
        $scope.tabs = [
            {
                'title' : 'Funcion Docencia',
                'view'  : '/js/components/laborAcademica/funcionDocencia.template.html',
                'showTitle' : true
            },
            {
                'title' : 'Funcion Investigación',
                'view'  : '/js/components/laborAcademica/investigacion.template.html',
                'showTitle' : true
            },
            {
                'title' : 'Funcion Proyeccion Social o Extencion',
                'view'  : '/js/components/laborAcademica/proyeccionSocial.template.html',
                'showTitle' : true
            },
            {
                'title' : 'Funcion Administración y Gestion',
                'view'  : '/js/components/laborAcademica/funcionAdministracion.template.html',
                'showTitle' : true
            },
            {
                'title' : 'Mejoramiento Academico',
                'view'  : '/js/components/laborAcademica/mejoramientoAcademico.template.html',
                'showTitle' : true
            }
        ];

        /**
         * @ngdoc function
         * @name addFamilyNucleus
         * @methodOf module.nomina
         * @description agrega un nuevo mienbro al nucleo familiar
         */
        $scope.addFamilyNucleus = () => {

        };

        /**
         * @ngdoc function
         * @name addWorkExperience
         * @methodOf module.nomina
         * @description agrega una nueva experiencia laboral
         */
        $scope.addWorkExperience = () => {

        };

        /**
         * @ngdoc function
         * @name addAcademicTraining
         * @methodOf module.nomina
         * @description agrega una nueva formacion academica
         */
        $scope.addAcademicTraining = () => {

        };

        /**
         * @ngdoc function
         * @name addForeignLanguage
         * @methodOf module.nomina
         * @description agrega un nuevo idioma extrajero
         */
        $scope.addForeignLanguage = () => {

        };

    }
})();
