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
      var intensidades_horarias = [{id_hora_tipo:"T",intensidad_horaria_cantidad:0} ]
      var requisitos = [{requisito_tipo:"P",periodo_tipo:"S"}]
      $scope.acuerdoAgregado = false;
      $scope.periodoAgregado = false;
      $scope.asignaturas = false;
      $scope.asignatura = null;
      $scope.periodos = [];
      $scope.numNuevoPeriodo = 1;





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

      var agregarPeriodo = function(){
        //va y agrega el Periodo a la base de datos
        intensidades_horarias = [{id_hora_tipo:"T",intensidad_horaria_cantidad:0} ]
        requisitos = [{requisito_tipo:"P",periodo_tipo:"S"}];
        var nuevoPeriodo = {acuerdo_periodo_tipo:"S",num_periodo:$scope.numNuevoPeriodo,acuerdo_periodo_vigente:"S",nuevaAsignatura:{intensidades_horarias:intensidades_horarias,requisitos:requisitos}};
        console.log(nuevoPeriodo);
        $scope.periodos.push(nuevoPeriodo);
        $scope.periodoAgregado = true;
        $scope.numNuevoPeriodo = $scope.numNuevoPeriodo + 1;  
        console.log("el nuevo periodo");
        console.log($scope.periodos);

      }

      var agregarIntensidadHoraria = function(parentIndex){
        console.log(parentIndex);
        console.log($scope.periodos)
        $scope.periodos[parentIndex].nuevaAsignatura.intensidades_horarias.push({id_hora_tipo:"T",intensidad_horaria_cantidad:0} );
      }

      var agregarRequisito = function(parentIndex){
        $scope.periodos[parentIndex].nuevaAsignatura.requisitos.push({requisito_tipo:"P",periodo_tipo:"S" } );
    
      }

      var eliminarIntensidadHoraria = function(parentIndex,index){
        $scope.periodos[parentIndex].nuevaAsignatura.intensidades_horarias.splice(index,1);
        
        //({id_hora_tipo:"T",intensidad_horaria_cantidad:0} );
      }
      var eliminarRequisito = function(index){
        $scope.periodos[parentIndex].nuevaAsignatura.requisitos.splice(index,1);
        //({id_hora_tipo:"T",intensidad_horaria_cantidad:0} ); 
      }

      var guardarAsignatura = function(){
        //$scope.asignatura = {}

      }
      //
      var limpiarAcuerdo = function(){
        $scope.acuerdo = acuerdo_limpio;
      }//cierra crear acuerdo

       $scope.crearAcuerdo = crearAcuerdo;
       $scope.limpiarAcuerdo= limpiarAcuerdo;
       $scope.agregarIntensidadHoraria = agregarIntensidadHoraria;
       $scope.eliminarIntensidadHoraria =eliminarIntensidadHoraria;
       $scope.agregarPeriodo= agregarPeriodo;
      $scope.agregarRequisito= agregarRequisito;
      $scope.eliminarRequisito =eliminarRequisito;
    }

})();
