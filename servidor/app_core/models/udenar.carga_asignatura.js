'use strict';
module.exports = function(sequelize, DataTypes) {
    var CargaAsignatura = sequelize.define('CargaAsignatura', {
        
        id_carga_asignatura:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },

        id_acuerdo_periodo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_asignatura:{
            type: DataTypes.STRING,
            allowNull: false
        },
        credito:{
            type: DataTypes.INTEGER,
            allowNull: true
        },

        hora_practica:{
            type: DataTypes.FLOAT,
            allowNull: false
        },

        hora_periodo:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        carga_asignatura_tipo:{
            type: DataTypes.STRING,
            allowNull: false

        },

        carga_asignatura_vigente:{
            type: DataTypes.STRING(1),
            allowNull: true,
        },

        
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'carga_asignatura',
        classMethods: {
            associate: function(models) {
                //models.Acuerdo.belongsTo(models.Acuerdo, {'foreignKey':'id_acuerdo_periodo', 'as':"idacuerdoperiodocargaasignatura"});
                models.Requisito.belongsToMany(models.CargaAsignatura,{through: 'RequisitoCargaAsignatura'});
                
            }
        }
    });
    return CargaAsignatura;
};
