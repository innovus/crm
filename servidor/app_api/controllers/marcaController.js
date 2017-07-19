var Respuesta= require("../helpers/respuesta");
var MarcaDao= require("../../app_core/dao/marcaDao");

var listarMarcas= function(req,res){
	MarcaDao.findAll().then(function(marcas){
		Respuesta.sendJsonResponse(res,200,marcas);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var findByIdMarca= function(req,res){
	MarcaDao.findByIdMarca(req.params.id).then(function(marca){
		Respuesta.sendJsonResponse(res,200,marca);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
};

var crearMarca= function(req,res){
	var nuevaMarca={
		nom_marca:req.body.nom_marca
	};
	MarcaDao.create(nuevaMarca).then(function(marca){
		//Respuesta.sendJsonResponse(res,200,marca);
	}).catch(function(error){
		//Respuesta.sendJsonResponse(res,500,error);
	});
};

var actualizarMarca= function(req,res){

	var marcaActualizar={
		nom_marca:req.body.nom_marca
	};
	MarcaDao.update(marcaActualizar,req.params.id,function(marca,error){
		if(error){
			Respuesta.sendJsonResponse(res,500,error);	
		}
		if(marca){
			Respuesta.sendJsonResponse(res,200,marca);
		}
	});
};

var eliminarMarca= function(req,res){
	MarcaDao.destroy(req.params.id).then(function(resultado){
		if(resultado==1){
			Respuesta.sendJsonResponse(res,200,{"mensaje":"registro eliminado"});
		}
		else{
			Respuesta.sendJsonResponse(res,500,{"mensaje":"registro no encontrado"});
		}
		
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,{"error":"error en la eliminacion"});
	});
};

module.exports.listarMarcas=listarMarcas;
module.exports.findByIdMarca=findByIdMarca;
module.exports.crearMarca=crearMarca;
module.exports.actualizarMarca=actualizarMarca;
module.exports.eliminarMarca=eliminarMarca;