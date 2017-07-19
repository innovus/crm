(function(){

    angular
        .module("udenar")
        .service("MensajesService", MensajesService);

    MensajesService.$inject= ["$window","$http","CONFIG","$cookieStore","$log","SweetAlert"];
    function MensajesService($window, $http, CONFIG, $cookieStore,$log,SweetAlert){


        var mensajeAlerta= function(mensaje, tipo){
            var color="#449d44";
            var tipomensaje = "info";
            var titulo = "Información"

            switch (tipo){
                case "informacion":
                    color="#449d44";
                    tipomensaje="info";
                    titulo="Información"
                    break;
                case "error":
                    color="#c9302c";
                    tipomensaje="error";
                    titulo="Error"
                    break;
                case "advertencia":
                    color="#f0ad4e";
                    tipomensaje="warning";
                    titulo="Advertencia"
                    break;
                case "exito":
                    color="#31b0d5";
                    tipomensaje="success";
                    titulo="Exito"
                    break;
            }

            SweetAlert.swal({
                title: titulo,
                text: mensaje,
                type: tipomensaje,
                confirmButtonColor: color,
                confirmButtonText: "Aceptar"
            });
        };


        var mensajeConfirmacion= function(mensajeTitulo,mensaje,funcionConfirmacion){
            SweetAlert.swal({
                    title: mensajeTitulo,
                    text: mensaje,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm){
                    if (isConfirm) {
                        funcionConfirmacion();
                    } else {
                        mensajeAlerta("Proceso cancelado", "informacion");
                    }
                }
            );
        };

        return{
            mensajeAlerta:mensajeAlerta,
            mensajeConfirmacion:mensajeConfirmacion


        };

    }

})();