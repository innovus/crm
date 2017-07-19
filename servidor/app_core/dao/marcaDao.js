var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var SecuenciaDao=require("../dao/secuenciaDao");
var Q= require("q");

var findAll= function(){
	return Models.Marca.findAll({
    });
};

var findByIdMarca= function(identificador){
	return Models.Marca.find({
        where:{
            id_marca:identificador
        }
    });
};

var create= function(marca){
    
    var deferred= Q.defer();
    SecuenciaDao.incrementarSecuencia("SECUENCIA_MARCA").then(function(data){
        
        var transaccion=data.transaccion;
        var secuencia= data.secuencia;

        Models.Marca.create({
            nom_marca:marca.nom_marca,
            id_marca:data.secuencia.consecutivo
        },{transaction:transaccion}).then(function(resultado){
            //transaccion.commit();
            deferred.resolve(resultado);
        })
        .catch(function(error){
            transaccion.rollback();
            deferred.reject(error);
        });
    }).catch(function(error){
        deferred.reject(error);
    });

    return deferred.promise;

};

var update=function(marca, identificador, callback){
	Models.Marca.find({
        where: {
            id_marca:identificador
        }
    }).then(function(resultado){
        if(resultado){
            resultado.updateAttributes({
                nom_marca:marca.nom_marca
            }).then(function(marca){
                callback(marca,null);
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

var destroy=function(identificador){
	return Models.Marca.destroy({
        where:{
            id_marca:identificador
        }
    });
};

module.exports.findAll=findAll
module.exports.findByIdMarca=findByIdMarca
module.exports.create=create
module.exports.update=update
module.exports.destroy=destroy
