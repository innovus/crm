(function(){
  angular
    .module('tienda')
    .controller('productoController', productoController);

    productoController.$inject=['$scope','productoService','autenticacion','$location','marcaService','$log','$uibModal','SweetAlert'];
    function productoController ($scope,productoService,autenticacion,$location,marcaService,$log,$uibModal,SweetAlert){
        /**
         * atributos
        */
        var hm=this;
        hm.lstProducto=[];
        hm.lstMarcas=[];
        hm.isLoggedIn=false;
        hm.currentPath=$location.path();
        hm.formError="";
        hm.producto={};
        hm.esCrear=false;

        /**
         * metodos
        */
        var init= function(){
          autenticacion.isLoggedIn(function(data,error){
             if(error){
                    $log.log(error);
                }
                else{
                    if(data){
                        hm.isLoggedIn=true;
                        productoService.darProductos().success(function(data){
                          hm.lstProducto=data;
                        }).error(function(data){
                          alert("error en la consulta: "+data);        
                        });

                        marcaService.darMarcas().success(function(data){
                          hm.lstMarcas=data;
                        }).error(function(data){
                          alert("error en la consulta "+ data);
                        });
                    }
               }      
          });
        }

        hm.sort = function(keyname){
           hm.sortKey = keyname;
           hm.reverse = !hm.reverse;
        }

        hm.crearProducto=function(){
            productoService.create(hm.producto).success(function(producto){
                SweetAlert.swal("Exito!", "El registro ha sido creado", "success");
                hm.lstProducto.push(producto);
                hm.producto={};
                hm.esCrear=false;
            }).error(function(error,status){
                console.log(error,status);
                if(status=="401"){
                  alert("no esta autorizado para realizar esta transaccion");
                }
            });
        }

        hm.toggleForm= function (){
            hm.esCrear= !hm.esCrear;
        }

        hm.abrirEditarModal= function(productoSeleccionado){
          var modalInstance = $uibModal.open({
            backdrop  : 'static',
            keyboard  : false,
            templateUrl: "/js/components/productos/modalEditar/modalEditar.template.html",
            controller: 'modalEditarController',
            controllerAs:'mec',
            resolve:{
              datos: function(){
                  return {
                      producto: productoSeleccionado,
                      marcas:hm.lstMarcas
                  }
              }
            }
          });

          modalInstance.result.then(function (data) {
            SweetAlert.swal("Exito!", "El registro ha sido editado", "success");
          });
        };

        hm.eliminar= function(idProducto){
          SweetAlert.swal({
            title: "Advertencia",
            text: "¿Esta seguro de eliminar este registro?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Eliminar",
            closeOnConfirm: false}, 
          function(isConfirm){
            if(isConfirm){ 
                productoService.eliminar(idProducto).success(function(data){
                  hm.lstProducto.forEach(function(producto,index){
                      if(producto.id_producto===idProducto){
                        console.log("indice:"+index);
                        hm.lstProducto.splice(index, 1);
                        return;
                      }   
                  });
                  SweetAlert.swal({title:"Exito!", text:"registro eliminado", type:"success",timer: 1000, showConfirmButton: false});  
                }).error(function(data){
                    SweetAlert.swal("Error!", "Existe un error al eliminar", "error");
                });
            }
          });
          
        };

        init();
    }

})();
