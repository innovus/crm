(function(){
    angular
    .module('tienda')
    .config(messages);
    messages.$inject= ["$translateProvider"];
    function messages($translateProvider){
        $translateProvider.translations('es', {
            gestion_producto: 'Gestión de productos',
            crear_producto: 'Crear Producto',
            logueate: 'Logueate para ingresar',
            buscar_placehoder:'Buscar',
            identificador:'Identificador',
            nombre_producto:'Nombre',
            nombre_marca:'Marca',
            cantidad_producto:'Cantidad',
            valor_producto:'Valor',
            crear_nuevo_titulo:'Crear un nuevo producto',
            editar_producto_titulo:'Editar producto',
            btn_crear: 'Crear',
            btn_cancelar:'Cancelar',
            btn_editar:'Editar',
            detalle_producto:'Detalles del producto: ',
            subida_archivo: 'Ejemplo subida de archivos',
            nombre_archivo:'Nombre del archivo: ',
            enviar:'Enviar'
        });

        $translateProvider.preferredLanguage('es');   
        $translateProvider.useSanitizeValueStrategy('escape'); 
    }
})();


    