var Respuesta= require("../helpers/respuesta");
var ProductoDao= require("../../app_core/dao/productoDao");
var SecuenciaDao= require("../../app_core/dao/secuenciaDao");
var ProveedorDao= require("../../app_core/dao/proveedorDao");
var FuncionesSeguridad = require("../helpers/funcionesSeguridad");

var listarProductos= function(req,res){
	var token=req.headers.authorization.split(' ')[1];
	FuncionesSeguridad.getTokenData(token).then(function(decoded){
		ProductoDao.findAll().then(function(productos){
			Respuesta.sendJsonResponse(res,200,productos);
		}).catch(function(error){
			Respuesta.sendJsonResponse(res,500,error);
		});
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var findByIdProducto=function(req,res){
	ProductoDao.findByIdProducto(req.params.id).then(function(producto){
		Respuesta.sendJsonResponse(res,200,producto);
	}).catch(function(error){
		console.log(error);
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var crearProducto=function(req,res){
	var nuevoProducto={
		nombre_producto:req.body.nombre_producto,
        id_marca:req.body.id_marca,
        cantidad:req.body.cantidad,
        valor:req.body.valor
	};
	ProductoDao.create(nuevoProducto).then(function(producto){
		Respuesta.sendJsonResponse(res,200,producto);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var eliminarProducto=function(req,res){
	ProductoDao.destroy(req.params.id).then(function(resultado){
		if(resultado==1){
			Respuesta.sendJsonResponse(res,200,{"mensaje":"registro eliminado"});
		}
		else{
			Respuesta.sendJsonResponse(res,500,{"mensaje":"registro no encontrado"});	
		}
		
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var actualizarProducto= function(req,res){
	var productoActualizar={
		nombre_producto:req.body.nombre_producto,
      	cantidad:req.body.cantidad,
      	valor:req.body.valor,
      	id_marca:req.body.id_marca
	};
	ProductoDao.update(productoActualizar,req.params.id, function(producto,error){
		if(error){
			Respuesta.sendJsonResponse(res,500,error);
		}
		if(producto){
			Respuesta.sendJsonResponse(res,200,producto);
		}
	});
};

var test= function(req,res){
	var nuevoProveedor={
		nombre_proveedor:req.body.nombre_proveedor
	};
	ProveedorDao.create(nuevoProveedor).then(function(data){
		Respuesta.sendJsonResponse(res,200,data);	
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

module.exports.test=test;
module.exports.listarProductos=listarProductos;
module.exports.findByIdProducto=findByIdProducto;
module.exports.crearProducto=crearProducto;
module.exports.eliminarProducto=eliminarProducto;
module.exports.actualizarProducto=actualizarProducto;



