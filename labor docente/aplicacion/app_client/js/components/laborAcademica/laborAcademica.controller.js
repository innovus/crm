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

    laborAcademicaCtrl.$inject = ['$scope', 'pasarDatos', '$compile', '$rootScope', 'autenticacion', '$location', '$timeout', 'SweetAlert', '$q','MensajesService' ];

    function laborAcademicaCtrl($scope, pasarDatos, $compile, $rootScope, autenticacion, $location, $timeout, SweetAlert, $q , MensajesService) {

        /**
         * esta variable representa el titulo y el subtitulo de la pagina actual
         * @var {Object} titulo
         */
        $scope.titulo = {
            "titulo": "Labor Academica",
            "subtitulo": pasarDatos.data.nombre_completo
        }
        modalLimpio = {tipo:"1",nivel_formacion:"1"}


        $scope.periodo_tipo ="Semestre";
        $scope.laborDocencia ={};
        $scope.modalInvestigacion = modalLimpio;
        investigacionEditar = {};
        interaccionSocialEditar = {};
        administracionEditar = {};
        mejoramientoAcademicoEditar = {};
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
            },
           
        ]

        $scope.actividadesAdministracion = [
            {
                cargo:"ACTO ADMINISTRATIVO",
                tipo_cargo:"CARGOS ADMINISTRATIVOS",
                H_S:2,
                H_SM:36,
            },
           
        ]

        $scope.actividadesMejoramientoAcademico = [
            {
                mejoramiento:"COMISION DE ESTUDIOS",
                tipo_mejoramiento:"ACTO ADMINISTRATIVO",
                H_S:2,
                H_SM:36,
            },
           
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
        $scope.editarInvestigacion = (investigacion) => {
            investigacionEditar = investigacion;
            index =  $scope.actividadesInvestigacion.indexOf(investigacion);
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
                index =  $scope.actividadesInvestigacion.indexOf(investigacionEditar);
                $scope.actividadesInvestigacion[index] = $scope.modalInvestigacion;


                console.log("editar");

            }

        };


    
         /**
         * @ngdoc function
         * @name editarProyeccionSocial
         * @methodOf module.proyeccionSocial
         * @description abre el modal y edita los campos para proyeccion social
         */
        $scope.editarProyeccionSocial = (proyeccionSocial) => {
            interaccionSocialEditar = proyeccionSocial ;
            index =  $scope.actividadesProyeccionSocial.indexOf(proyeccionSocial);
            $scope.modalInteraccionSocial  = $scope.actividadesProyeccionSocial[index];
            $scope.modalInteraccionSocial.agregar = false;
            console.log(index)
            
        };

        /**
         * @ngdoc function
         * @name agregarInteraccionSocial
         * @methodOf module.InteraccionSocial
         * @description abre el modal y prepara para agregar una nueva interaccion social al vector
         */
        $scope.agregarInteraccionSocial = () => {
            $scope.modalInteraccionSocial ={};
            $scope.modalInteraccionSocial.agregar = true;
            console.log("prueba")
            
        };

        /**
         * @ngdoc function
         * @name guardarInteraccionSocial
         * @methodOf module.InteraccionSocial
         * @description agrega una nueva Interaccion Social 
         */
        $scope.guardarInteraccionSocial = () => {
            if($scope.modalInteraccionSocial.agregar == true || $scope.modalInteraccionSocial.agregar == undefined ){
                $scope.actividadesProyeccionSocial.push($scope.modalInteraccionSocial);

            }else{
                index =  $scope.actividadesProyeccionSocial.indexOf(interaccionSocialEditar);
                $scope.actividadesProyeccionSocial[index] = $scope.modalInteraccionSocial;


                console.log("editar");

            }

        };


        /**
         * @ngdoc function
         * @name editarProyeccionSocial
         * @methodOf module.proyeccionSocial
         * @description abre el modal y edita los campos para proyeccion social
         */
        $scope.editarAdministracion = (funcionAdministracion) => {
            administracionEditar = funcionAdministracion ;
            index =  $scope.actividadesAdministracion.indexOf(funcionAdministracion);
            $scope.modalAdministracion  = $scope.actividadesAdministracion[index];
            $scope.modalAdministracion.agregar = false;
            console.log(index)
            
        };


        $scope.agregarAdministracion = () => {
            $scope.modalAdministracion ={};
            $scope.modalAdministracion.agregar = true;
            console.log("prueba")
            
        };


        /**
         * @ngdoc function
         * @name guardarInteraccionSocial
         * @methodOf module.InteraccionSocial
         * @description agrega una nueva Interaccion Social 
         */
        $scope.guardarAdministracion = () => {
            if($scope.modalAdministracion.agregar == true || $scope.modalAdministracion.agregar == undefined ){
                $scope.actividadesAdministracion.push($scope.modalAdministracion);

            }else{
                index =  $scope.actividadesAdministracion.indexOf(administracionEditar);
                $scope.actividadesAdministracion[index] = $scope.modalAdministracion;


                console.log("editar");

            }

        };


        //modalMejoramientoAcademico

         $scope.editarMejoramientoAcademico = (mejoramientoAcademico) => {
            mejoramientoAcademicoEditar = mejoramientoAcademico ;
            index =  $scope.actividadesMejoramientoAcademico.indexOf(mejoramientoAcademico);
            $scope.modalMejoramientoAcademico  = $scope.actividadesMejoramientoAcademico[index];
            $scope.modalMejoramientoAcademico.agregar = false;
            console.log(index)
            
        };

         $scope.agregarMejoramientoAcademico = () => {
            $scope.modalMejoramientoAcademico ={};
            $scope.modalMejoramientoAcademico.agregar = true;
            console.log("prueba")
            
        };

        $scope.guardarMejoramientoAcademico = () => {
            if($scope.modalMejoramientoAcademico.agregar == true || $scope.modalMejoramientoAcademico.agregar == undefined ){
                $scope.actividadesMejoramientoAcademico.push($scope.modalMejoramientoAcademico);

            }else{
                index =  $scope.actividadesMejoramientoAcademico.indexOf(mejoramientoAcademicoEditar);
                $scope.actividadesMejoramientoAcademico[index] = $scope.modalMejoramientoAcademico;


                console.log("editar");

            }

        };


        $scope.eliminarInvestigacion = (vector,eliminar) => {
            console.log(vector)

            var funcionEliminar= function() {
                console.log(vector);
                index =  vector.indexOf(eliminar);
                vector.splice(index,1);
                MensajesService.mensajeAlerta("Se ha eliminado el registro de manera exitosa", "exito");
            }


             MensajesService.mensajeConfirmacion(
                "Eliminar Registro",
                "Esta seguro de eliminar este registro ",
                funcionEliminar
            );
        }

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
