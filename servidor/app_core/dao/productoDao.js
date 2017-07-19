var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;


var findAll= function(){
	return Models.Producto.findAll({
          include:[{model:Models.Marca, as:"marca"}]
    });
};

var findByIdProducto= function(identificador){
	return Models.Producto.find({
        include:[{model:Models.Marca, as:"marca"}],
        where:{
            id_producto:identificador
        }
    });
};

var create= function(producto){
	return Models.Producto.create({
        nombre_producto:producto.nombre_producto,
        id_marca:producto.id_marca,
        cantidad:producto.cantidad,
        valor:producto.valor
    });
};

var update=function(producto, identificador, callback){
	Models.Producto.find({
      where:{
          id_producto:identificador
      }
  	}).then(function(resultado){
      if(resultado){
          resultado.updateAttributes({
              nombre_producto:producto.nombre_producto==null?resultado.nombre_producto:producto.nombre_producto,
              cantidad:producto.cantidad==null?resultado.cantidad:producto.cantidad,
              valor:producto.valor==null?resultado.valor:producto.valor,
              id_marca:producto.id_marca==null?resultado.id_marca:producto.id_marca
          }).then(function(productoActualizado){
              findByIdProducto(productoActualizado.id_producto).then(function(result){
                  callback(result,null);  
              }).catch(function(error){
                  callback(null,error);  
              });
          }).catch(function(error){
              callback(null,error);
          });
      }
      else{
      	callback(null,{"error":"no se encuentra el registro en el sistema"});
      }
    }).catch(function(error){
        callback(null,error);
    });      
};

var destroy=function(identificador){
	return Models.Producto.destroy({
		where:{
            id_producto:identificador
        }
	});
};

module.exports.findAll=findAll
module.exports.findByIdProducto=findByIdProducto
module.exports.create=create
module.exports.update=update
module.exports.destroy=destroy