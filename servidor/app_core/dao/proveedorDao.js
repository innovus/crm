var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var SecuenciaDao=require("../dao/secuenciaDao");
var Q= require("q");


var create=function(proveedor){
	var deferred= Q.defer();
	SecuenciaDao.incrementarSecuencia("SECUENCIA_PROVEEDOR").then(function(data){
		var transaccion=data.transaccion;
        var secuencia= data.secuencia;

        Models.Proveedor.create({

            id_proveedor:data.secuencia.consecutivo,
            nombre_proveedor:proveedor.nombre_proveedor,
            estado:'A'

        },{transaction:transaccion}).then(function(resultado){
            transaccion.commit();
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

module.exports.create=create;