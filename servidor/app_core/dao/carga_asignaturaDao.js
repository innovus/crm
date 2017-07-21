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



module.exports.findAll=findAll
module.exports.findById=findById


