//var estudianteDao= require("../../app_core/dao/estudianteDao");
var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Respuesta= require("../helpers/respuesta");
var Errores= require ("../../app_core/config/errors");
var AcuerdoDao= require("../../app_core/dao/acuerdoDao");
var AcuerdoPeriodoDao= require("../../app_core/dao/acuerdo_periodoDao");
var CargaAsignaturaDao = require("../../app_core/dao/carga_asignaturaDao");
var IntensidadHorariaDao = require("../../app_core/dao/intensidad_horariaDao");





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
       console.log(resultado)
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


//--------------------------------------------------------------------------------------------------------

var listarAcuerdosPeriodo= function(req,res){ 

	AcuerdoPeriodoDao.findAll().then(function(acuerdosPeriodo){
		Respuesta.sendJsonResponse(res,200,acuerdosPeriodo);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var findByIdAcuerdoPeriodo= function(req,res){ 

	AcuerdoPeriodoDao.findById(req.params.id).then(function(acuerdoPeriodo){
		Respuesta.sendJsonResponse(res,200,acuerdoPeriodo);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var createAcuerdoPeriodo= function(req,res){ 
	var identificador = req.params.identificador;
	var acuerdoPerido = req.body;
	console.log(acuerdoPerido);

	AcuerdoPeriodoDao.create(acuerdoPerido).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
       console.log(resultado);
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });

};

var updateAcuerdoPeriodo= function(req,res){ 
	var identificador = req.params.id;
	var acuerdoPeriodo = req.body;
	console.log(acuerdoPeriodo);

	AcuerdoPeriodoDao.update(acuerdoPeriodo,identificador).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });

};

var deleteAcuerdoPeriodo= function (req, res){
    AcuerdoPeriodoDao.destroy(req.params.id).then(function(acuerdoPerido){
        if(acuerdoPerido=1){
            Respuesta.sendJsonResponse(res,200,{"mensaje":"registro eliminado"});
        }
        else{
            Respuesta.sendJsonResponse(res,404,{"mensaje":"registro no encontrado"});
        }
    }).catch(function(error){
        Respuesta.sendJsonResponse(res,500,error);
    });
};

//----------------------------------------------------------------------------------------
var listarCargaAsignatura= function(req,res){ 

	CargaAsignaturaDao.findAll().then(function(cargaAsignatura){
		Respuesta.sendJsonResponse(res,200,cargaAsignatura);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var findByIdCargaAsignatura= function(req,res){ 

	CargaAsignaturaDao.findById(req.params.id).then(function(cargaAsignatura){
		Respuesta.sendJsonResponse(res,200,cargaAsignatura);
	}).catch(function(error){
		Respuesta.sendJsonResponse(res,500,error);
	});
  
};

var createCargaAsignatura= function(req,res){ 
	var cargaAsignatura = req.body;
	console.log(cargaAsignatura);


	/*sequelize.transaction(function (t) {
			 // chain all your queries here. make sure you return them.
		  return AcuerdoDao.create(acuerdo, {transaction: t}).then(function (user) {
		    return AcuerdoDao.create(acuerdo, {transaction: t});
		  });

		}).then(function (resultado) {
		  // Transaction has been committed
		  // result is whatever the result of the promise chain returned to the transaction callback
		  console.log("Id del ultimo registro: ",resultado.get('id_acuerdo'))
     	  Respuesta.sendJsonResponse(res,200,resultado); 
     	  console.log(resultado)
		}).catch(function (error) {
		  // Transaction has been rolled back
		  // err is whatever rejected the promise chain returned to the transaction callback
		    Respuesta.sendJsonResponse(res,500,error);
	});*/

	sequelize.transaction(function (t) {
			 // chain all your queries here. make sure you return them.
			 return sequelize.transaction({autocommit:false}).then(function(t){
			 			Models.CargaAsignatura.create(cargaAsignatura, {transaction: t}).then(function (cargaAsignaturaNew) {
			 		    	Models.IntensidadHoraria.create({
							    "id_carga_asignatura": "juan",
							    "id_hora_tipo": 1,
							    "intensidad_horaria_cantidad": 155
							}, {transaction: t}).then(function (intensidadHorariaNew) {
									t.commit();
									 Respuesta.sendJsonResponse(res,200,intensidadHorariaNew); 

							}).catch(function (err){
								t.rollback();
								console.log("Esta bn")
								Respuesta.sendJsonResponse(res,500,err);

							});
			 			}).catch(function (err){

							t.rollback();
							console.log("entro al error")
							 Respuesta.sendJsonResponse(res,500,err);
						});
			 });//transaction fin
	});
		/*  return Models.CargaAsignatura.create(cargaAsignatura, {autocommit:false}).then(function (user) {
		  	console.log("Aqui esta la nea")
		  	console.log(user.get('id_carga_asignatura'))
		  //	console.log(user.Instance.dataValues)
		    return Models.IntensidadHoraria.create({
					    "id_carga_asignatura": "juan",
					    "id_hora_tipo": 1,
					    "intensidad_horaria_cantidad": 155
					}, {transaction: t});
		  	});*/

		/*}).then(function (resultado) {
		  // Transaction has been committed
		  // result is whatever the result of the promise chain returned to the transaction callback
		     //return t.commit();

		  Respuesta.sendJsonResponse(res,200,resultado); 
     	  //console.log(resultado)
		}).catch(function (error) {
		  // Transaction has been rolled back
		  // err is whatever rejected the promise chain returned to the transaction callback
		  return t.rollback();
		  console.log("Erroesa")
		    Respuesta.sendJsonResponse(res,500,error);
	});*/


	/*
	CargaAsignaturaDao.create(cargaAsignatura).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
       console.log(resultado);
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });
    */

};

//------------------------------------------------------------------------------------------
var createIntensidadHoraria= function(req,res){ 
	var intensidadHoraria = req.body;
	console.log(intensidadHoraria);

	IntensidadHorariaDao.create(intensidadHoraria).then(function(resultado){
       Respuesta.sendJsonResponse(res,200,resultado); 
       console.log(resultado);
    }).catch(function(error){
       Respuesta.sendJsonResponse(res,500,error);
    });

};
//---------------------------------------------------------------------------------------------


module.exports.listarAcuerdos=listarAcuerdos;
module.exports.findById=findById;
module.exports.updateAcuerdo=updateAcuerdo;
module.exports.deleteAcuerdo=deleteAcuerdo;
module.exports.createAcuerdo=createAcuerdo;

//----------------------------------------------

module.exports.listarAcuerdosPeriodo=listarAcuerdosPeriodo;
module.exports.findByIdAcuerdoPeriodo=findByIdAcuerdoPeriodo;
module.exports.createAcuerdoPeriodo=createAcuerdoPeriodo;
module.exports.updateAcuerdoPeriodo=updateAcuerdoPeriodo;
module.exports.deleteAcuerdoPeriodo=deleteAcuerdoPeriodo;

//----------------------------------------------------------------------------------------------

module.exports.listarCargaAsignatura=listarCargaAsignatura;
module.exports.findByIdCargaAsignatura=findByIdCargaAsignatura;
module.exports.createCargaAsignatura=createCargaAsignatura;

