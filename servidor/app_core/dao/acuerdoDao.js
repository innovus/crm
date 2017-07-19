var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Q= require("q");

var findAll= function(){
      return Models.Acuerdo.findAll({
    });

};

var findById= function(idAcuerdo){
    console.log(idAcuerdo)
    
    return Models.Acuerdo.findOne({
        id_acuerdo: idAcuerdo
    });
};


var create= function(acuerdo){
    return Models.Acuerdo.create({
        id_programa:acuerdo.id_programa,
        acuerdo_tipo:acuerdo.acuerdo_tipo,
        fec_inicial:acuerdo.fec_inicial,
        fec_final:acuerdo.fec_final,
        acuerdo_vigente:acuerdo.acuerdo_vigente,
        acuerdo_numero:acuerdo.acuerdo_numero,
        fec_acuerdo:acuerdo.fec_acuerdo
    });
};

//con callback

/*

var update=function(acuerdo, identificador, callback){
	Models.Acuerdo.find({
        where: {
            id_acuerdo:identificador
        }
    }).then(function(resultado){
        if(resultado){

            resultado.updateAttributes({
                id_programa:acuerdo.id_programa==null?resultado.id_programa:acuerdo.id_programa,
                acuerdo_tipo:acuerdo.acuerdo_tipo==null?resultado.acuerdo_tipo:acuerdo.acuerdo_tipo,
                fec_inicial:acuerdo.fec_inicial==null?resultado.fec_inicial:acuerdo.fec_inicial,
                fec_final:acuerdo.fec_final==null?resultado.fec_final:acuerdo.fec_final,
                acuerdo_vigente:acuerdo.acuerdo_vigente==null?resultado.acuerdo_vigente:acuerdo.acuerdo_vigente,
                
            }).then(function(acuerdo){
                callback(acuerdo,null);
            }).catch(function(error){
                callback(null,error);
            });
        }
        else{
            callback(null,{"error":"no existe el registro buscado"});
        }
    }).catch(function(error){
        callback(null,error);
    }); 
};
*/

var update=function(acuerdo, identificador){
    console.log("entro a update")
    console.log(identificador)

    var deferred= Q.defer();

    Models.Acuerdo.find({
        where: {
            id_acuerdo:identificador
        }
    }).then(function(resultado){
        if(resultado){
            console.log("entro a resultado")

            resultado.updateAttributes({
                id_programa:acuerdo.id_programa==null?resultado.id_programa:acuerdo.id_programa,
                acuerdo_tipo:acuerdo.acuerdo_tipo==null?resultado.acuerdo_tipo:acuerdo.acuerdo_tipo,
                fec_inicial:acuerdo.fec_inicial==null?resultado.fec_inicial:acuerdo.fec_inicial,
                fec_final:acuerdo.fec_final==null?resultado.fec_final:acuerdo.fec_final,
                acuerdo_vigente:acuerdo.acuerdo_vigente==null?resultado.acuerdo_vigente:acuerdo.acuerdo_vigente,
                acuerdo_numero:acuerdo.acuerdo_numero==null?resultado.acuerdo_numero:acuerdo.acuerdo_numero,
                fec_acuerdo:acuerdo.acuerdo_numero==null?resultado.fec_acuerdo:acuerdo.fec_acuerdo,
                
            }).then(function(acuerdo){
                deferred.resolve(acuerdo);
               console.log(acuerdo);
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
	return Models.Acuerdo.destroy({
        where:{
            id_acuerdo:identificador
        }
    });
};

module.exports.findAll=findAll
module.exports.findById=findById
module.exports.create=create
module.exports.update=update
module.exports.destroy=destroy
