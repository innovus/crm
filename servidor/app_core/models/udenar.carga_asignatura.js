'use strict';
module.exports = function(sequelize, DataTypes) {
    var CargaAsignatura = sequelize.define('CargaAsignatura', {
        
        id_carga_asignatura:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_acuerdo_periodo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_asignatura:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        credito:{
            type: DataTypes.INTEGER,
            allowNull: false
        },       
        carga_asignatura_vigente:{
            type: DataTypes.STRING(1),
            allowNull: false,
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
                models.Requisito.belongsToMany(models.CargaAsignatura,{through: models.RequisitoCargaAsignatura});
                models.CargaAsignatura.belongsTo(models.AcuerdoPeriodo, {'foreignKey':'id_acuerdo_periodo', 'as':"idcargaasignatura"});
                models.CargaAsignatura.hasMany(models.IntensidadHoraria, {'foreignKey':'id_carga_asignatura', 'as':"idintensidadhoraria"});
                
            }
        }
    });
    return CargaAsignatura;
};
