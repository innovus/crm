/**
 * @file controlador para la hoja de vida del empleado
 * @name laborAcademica.controller.js
 * @author Jorge Luis Viveros - Juan Carlos Pantoja
 * @license Udenar
 * @copyright 21/07/2017 Udenar
 **/

/**
 * controlador para manejar la labor academica
 * como su informacion personal, formacion academica,
 * nucleo familiar, idioma extrajero, experiencia laboral
 *
 * @module laborAcademica
 */

(function() {




    angular
        .module('laborAcademica')
        .controller('laborAcademicaCtrl', laborAcademicaCtrl);

    laborAcademicaCtrl.$inject = ['$scope', '$sce', '$compile', '$rootScope', 'autenticacion', '$location', '$timeout', 'SweetAlert', '$q' ];

    function laborAcademicaCtrl($scope, $sce, $compile, $rootScope, autenticacion, $location, $timeout, SweetAlert, $q ) {

        /**
         * esta variable representa el titulo y el subtitulo de la pagina actual
         * @var {Object} titulo
         */
        $scope.titulo = {
            "titulo": "Labor Academica",
            "subtitulo": "Juan carlos Pantoja"
        }
        modalLimpio = {tipo:"1",nivel_formacion:"1"}


        $scope.periodo_tipo ="Semestre";
        $scope.laborDocencia ={};
        $scope.modalInvestigacion = modalLimpio;
        /**
         * contiente los tipos de investigacion que tiene una actividad de ivestigacion
         * codigo y el detalle
         * @var {Object} tabs
         */
        $scope.tipoActividadesInvestigacion = [
            {cod:"1",detalle:"INVESTIGACIÓN FORMAL"},
            {cod:"2",detalle:"DIRECCIÓN TRABAJOS DE GRADO"},
            {cod:"3",detalle:"JURADO TRABAJO DE GRADO"},
            {cod:"4",detalle:"ASESORIA PROYECTOS INVESTIGACIÓN FORMATICA"},
            {cod:"5",detalle:"PARTICIPACIÓN EN GRUPOS O LINEAS DE INVESTIGACIÓN"},
            {cod:"6",detalle:"PLANEACIÓN Y DISEÑO DE PROYECTOS"},
        ]

         

        /**
         * contiente los tipos de investigacion que tiene una actividad de ivestigacion
         * codigo y el detalle
         * @var {Object} tabs
         */
        $scope.tipoNivelFormacion = [
            {cod:1,detalle:"Pregrado"},
            {cod:2,detalle:"Postgrado"},
            {cod:3,detalle:"Doctorado"},
            {cod:4,detalle:"Maestria"},
        ]

        /**
         * contiente las investigaciones de prueba que cargaran al principio cuando inicie la pagina
         * codigo y el detalle
         * @var {Object} tabs
         */
        $scope.actividadesInvestigacion = [
            {
                tipo:"1",
                nivel_formacion:"1",
                titulo_proyecto:"Desarrolo e Implementacion de Herramienta para el seguimiento continuo de el Colegio LICEO DE LA UNIVERSIDAD DE NARIÑO",
                acuerdo:"2334-4",
                H_S:2,
                H_SM:36,
            },
            
            {
                tipo:"5",
                nombre_grupo:"Grupo 14",
                descripcion:"Desarrolo e Implementacion de Herramienta para el seguimiento continuo de el Colegio LICEO DE LA UNIVERSIDAD DE NARIÑO",
                H_S:2,
                H_SM:36,
            },
            {
                tipo:"4",
                nivel_formacion:"1",
                titulo_proyecto:"Desarrolo e Implementacion de Herramienta para el seguimiento continuo de el Colegio LICEO DE LA UNIVERSIDAD DE NARIÑO",
                acuerdo:"2334-4",
                H_S:2,
                H_SM:36,
            },
            {
                tipo:"6",
                nombre_grupo:"Grupo 1",
                financiador:"Ministerio",
                descripcion:"Desarrolo e Implementacion de Herramienta para el seguimiento continuo de el Colegio LICEO DE LA UNIVERSIDAD DE NARIÑO",
                H_S:2,
                H_SM:36,
            },
        ]

        $scope.actividadesProyeccionSocial = [
            {
                cargo_representacion:"COORDINADOR",
                nombre_proyecto:"CURSO ASCENSO ESCALAFÓN DOCENTE",
                acuerdo_aprobacion:"acuerdo No 3256",
                H_S:2,
                H_SM:36,
            }
        ]

       // $scope.modalAsignatura ={tipo:1,}

        /**
         * contiente las tabs que componen la pagina de labor academica
         * 
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
         * @name filterDetalles
         * @methodOf module.laborAcademica
         * @description Recibe un vector y un codigo para q consulte por codigo el detalle de un tipo
         */
        $scope.filterDetalles = (codigo,vector) => {
            out = "";
            angular.forEach(vector, function (value, key) {
                
                if(value.cod == codigo){
                    out = value.detalle
                }
            });
            return out;
        };

         /**
         * @ngdoc function
         * @name agregarInvestigacion
         * @methodOf module.laborAcademica
         * @description abre el modal y prepara para agregar una nueva investigacion al vector
         */
        $scope.agregarInvestigacion = () => {
            $scope.modalInvestigacion =modalLimpio;
            $scope.modalInvestigacion.agregar = true;

            console.log("prueba")
            
        };

         /**
         * @ngdoc function
         * @name agregarInvestigacion
         * @methodOf module.laborAcademica
         * @description abre el modal y prepara para agregar una nueva investigacion al vector
         */
        $scope.editarInvestigacion = (index) => {
            $scope.modalInvestigacion  = $scope.actividadesInvestigacion[index];

            $scope.modalInvestigacion.agregar = false;
            console.log(index)
            
        };

         /**
         * @ngdoc function
         * @name guardarInvestigacion
         * @methodOf module.laborAcademica
         * @description agrega una nueva experiencia laboral
         */
        $scope.guardarInvestigacion = () => {
            if($scope.modalInvestigacion.agregar == true || $scope.modalInvestigacion.agregar == undefined ){
                $scope.actividadesInvestigacion.push($scope.modalInvestigacion);

            }else{
                console.log("editar");

            }

        };


        //editarProyeccionSocial
         /**
         * @ngdoc function
         * @name editarProyeccionSocial
         * @methodOf module.proyeccionSocial
         * @description abre el modal y edita los campos para proyeccion social
         */
        $scope.editarProyeccionSocial = (proyeccionSocial) => {
            $scope.modalInvestigacion  =proyeccionSocial;
            $scope.modalInvestigacion.agregar = false;
            console.log($scope.modalInvestigacion)
            
        };

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
