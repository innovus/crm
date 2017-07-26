

$scope.eliminarInvestigacion = (investigacion) => {

	var funcionEliminar= function() {
		index =  $scope.actividadesInvestigacion.indexOf(investigacion);
		$scope.actividadesInvestigacion.splice(index,1);
		MensajesService.mensajeAlerta("Se ha eliminado el registro de manera exitosa", "exito");
	}


     MensajesService.mensajeConfirmacion(
        "Eliminar Actividad Investigacion",
        "Esta seguro de eliminar esta Investigacion ",
        funcionEliminar
    );
}