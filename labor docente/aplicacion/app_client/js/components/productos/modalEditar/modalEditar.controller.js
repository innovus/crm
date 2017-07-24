(function(){
  angular
    .module('tienda')
    .controller('modalEditarController', modalEditarController);

    modalEditarController.$inject=["$uibModalInstance","datos","productoService"];
    function modalEditarController ($uibModalInstance,datos,productoService){
        var mec= this;

        mec.producto= datos.producto;
        mec.marcas=datos.marcas;

        var modal={
            cancel : function(){
                $uibModalInstance.dismiss('cancel');          
            },
            close: function(result){
                $uibModalInstance.close(result);
            }
        };

        var onSubmit= function(){
            console.log(mec.producto);
            productoService.editar(mec.producto.id_producto, mec.producto).success(function (data) {
                mec.producto.marca=data.marca;
                mec.modal.close(data);
            }).error(function (data) {
                alert("error en la actualizada");
            });
            return false;    
        };

        mec.modal= modal;
        mec.onSubmit= onSubmit;
    }
})();    