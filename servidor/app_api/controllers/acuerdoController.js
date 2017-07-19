//var estudianteDao= require("../../app_core/dao/estudianteDao");
var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Respuesta= require("../helpers/respuesta");
var Errores= require ("../../app_core/config/errors");
var AcuerdoDao= require("../../app_core/dao/acuerdoDao");




var listarAcuerdos= function(req,res){ 

	AcuerdoDao.findAll().then(function(acuerdos){
		Respuesta.sendJsonResponse(res,200,acuerdos);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var findById= function(req,res){ 

	AcuerdoDao.findById(req.params.id).then(function(acuerdo){
		Respuesta.sendJsonResponse(res,200,acuerdo);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var createAcuerdo= function(req,res){ 
	var identificador = req.params.identificador;
	var acuerdo = req.body;
	console.log(acuerdo);

	AcuerdoDao.create(acuerdo).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });

};

var updateAcuerdo= function(req,res){ 
	var identificador = req.params.id;
	var acuerdo = req.body;
	console.log(acuerdo);

	AcuerdoDao.update(acuerdo,identificador).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });

};

var deleteAcuerdo= function (req, res){
    AcuerdoDao.destroy(req.params.id).then(function(acuerdo){
        if(acuerdo=1){
            Respuesta.sendJsonResponse(res,200,{"mensaje":"registro eliminado"});
        }
        else{
            Respuesta.sendJsonResponse(res,404,{"mensaje":"registro no encontrado"});
        }
    }).catch(function(error){
        Respuesta.sendJsonResponse(res,500,error);
    });
};


module.exports.listarAcuerdos=listarAcuerdos;
module.exports.findById=findById;
module.exports.updateAcuerdo=updateAcuerdo;
module.exports.deleteAcuerdo=deleteAcuerdo;
module.exports.createAcuerdo=createAcuerdo;
