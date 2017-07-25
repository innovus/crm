var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Q= require("q");

var findAll= function(){
      return Models.CargaAsignatura.findAll({
    });

};

//var requisito 



var findById= function(idCargaAsignatura){
    console.log(idCargaAsignatura)
    
    return Models.CargaAsignatura.findAll({
        include:[{model:Models.Requisito}]/*,
        where: {
            id_carga_asignatura: idCargaAsignatura
        }*/
        
    });
};


var create= function(cargaAsignatura){
    return Models.CargaAsignatura.create({
        id_acuerdo_periodo:cargaAsignatura.id_acuerdo_periodo,
        id_asignatura:cargaAsignatura.id_asignatura,
        credito:cargaAsignatura.credito,
        carga_asignatura_vigente:cargaAsignatura.carga_asignatura_vigente,
    });
};


module.exports.findAll=findAll
module.exports.findById=findById
module.exports.create=create

