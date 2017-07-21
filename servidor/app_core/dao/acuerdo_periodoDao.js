var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Q= require("q");

var findAll= function(){
      return Models.AcuerdoPeriodo.findAll({
    });

};

var findById= function(idAcuerdoPeriodo){
    console.log(idAcuerdoPeriodo)
    
    return Models.AcuerdoPeriodo.findOne({
        id_acuerdo_periodo: idAcuerdoPeriodo
    });
};

var create= function(acuerdoPeriodo){
    return Models.AcuerdoPeriodo.create({
        id_acuerdo:acuerdoPeriodo.id_acuerdo,
        acuerdo_periodo_tipo:acuerdoPeriodo.acuerdo_periodo_tipo,
        numero_periodo:acuerdoPeriodo.numero_periodo,
        acuerdo_periodo_vigente:acuerdoPeriodo.acuerdo_periodo_vigente
    });
};

var update=function(acuerdoPeriodo, identificador){
    console.log("entro a update acuerdo periodo")
    console.log(identificador)

    var deferred= Q.defer();

    Models.AcuerdoPeriodo.find({
        where: {
            id_acuerdo_periodo:identificador
        }
    }).then(function(resultado){
        if(resultado){
            console.log("entro a resultado acuerdo periodo")

            resultado.updateAttributes({
                id_acuerdo:acuerdoPeriodo.id_acuerdo==null?resultado.id_acuerdo:acuerdoPeriodo.id_acuerdo,
                acuerdo_periodo_tipo:acuerdoPeriodo.acuerdo_periodo_tipo==null?resultado.acuerdo_periodo_tipo:acuerdoPeriodo.acuerdo_periodo_tipo,
                numero_periodo:acuerdoPeriodo.numero_periodo==null?resultado.numero_periodo:acuerdoPeriodo.numero_periodo,
                acuerdo_periodo_vigente:acuerdoPeriodo.acuerdo_periodo_vigente==null?resultado.acuerdo_periodo_vigente:acuerdoPeriodo.acuerdo_periodo_vigente

                
            }).then(function(acuerdoPeriodo){
                deferred.resolve(acuerdoPeriodo);
               console.log(acuerdoPeriodo);
            }).catch(function(error){
                deferred.reject(error);
            });
        }
    }).catch(function(error){
        deferred.reject(error);
    }); 
    return  deferred.promise;
};

var destroy=function(identificador){
	return Models.AcuerdoPeriodo.destroy({
        where:{
            id_acuerdo_periodo:identificador
        }
    });
};

module.exports.findAll=findAll
module.exports.findById=findById
module.exports.create=create
module.exports.update=update
module.exports.destroy=destroy

