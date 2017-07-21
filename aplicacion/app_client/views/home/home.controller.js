(function(){
  angular
    .module('udenar')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject=['$scope','autenticacion','$location','MensajesService','AcuerdoService'];
    function homeCtrl ($scope,autenticacion,$location,MensajesService,AcuerdoService){

     // $scope.acuerdo = null;
      var acuerdo_limpio ={acuerdo_vigente:"S",acuerdo_tipo:"N"};
      $scope.acuerdo =acuerdo_limpio;
      $scope.periodo_tipo ="Semestre";
      $scope.intensidades_horarias = [{id_hora_tipo:"T",intensidad_horaria_cantidad:0} ]
      $scope.acuerdoAgregado = false;
      $scope.periodoAgregado = false;



      $scope.titulo={
        "titulo":"Plan de estudio",
        "subtitulo":"Agregar Plan de estudio"
      };


      //cuando le da en el boton guardar de la parte de acuerdo se guarda el acuerdo
      var crearAcuerdo = function(){

        /*
        AcuerdoService.createAcuerdo($scope.acuerdo).success(function(mensaje) {
          console.log(mensaje);
          MensajesService.mensajeAlerta("Se ha guardado el acuerdo correctamente","exito");
        }).error(function(error) {

          console.log(error);
          MensajesService.mensajeAlerta("Se ha guardado el acuerdo correctamente","error");
        });*/
        document.getElementById("btnAcuerdo").click();
        $scope.acuerdoAgregado = true;
        //console.log($scope.acuerdo)

        //collapseFunction();
      }//cierra crear acuerdo

      var agregarSemestre = function(){
        $scope.periodoAgregado = true;
      }


      var agregarIntensidadHoraria = function(){

        $scope.intensidades_horarias.push({id_hora_tipo:"T",intensidad_horaria_cantidad:0} );
       
      }
      var eliminarIntensidadHoraria = function(intensidadHoraria,index){


        $scope.intensidades_horarias.splice(index, 1);
        //({id_hora_tipo:"T",intensidad_horaria_cantidad:0} );
       
      }

      //
      var limpiarAcuerdo = function(){
        $scope.acuerdo = acuerdo_limpio;
      }//cierra crear acuerdo

       var irProductos= function(){
          $location.path('/producto');
       };
       var irArchivo= function(){
          $location.path('/subir');
       }

       $scope.irProductos=irProductos;
       $scope.irArchivo=irArchivo;
       $scope.crearAcuerdo = crearAcuerdo;
       $scope.limpiarAcuerdo= limpiarAcuerdo;
       $scope.agregarIntensidadHoraria = agregarIntensidadHoraria;
       $scope.eliminarIntensidadHoraria =eliminarIntensidadHoraria;
       $scope.agregarSemestre= agregarSemestre;
    }

})();
