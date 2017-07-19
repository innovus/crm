'use strict';
module.exports = function(sequelize, DataTypes) {
    var AcuerdoPeriodo = sequelize.define('AcuerdoPeriodo', {
        
        id_acuerdo_periodo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_acuerdo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        acuerdo_periodo_tipo:{
            type: DataTypes.STRING(1),
            allowNull: false
        },

        
        numero_periodo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        acuerdo_periodo_vigente:{
            type: DataTypes.STRING(1),
            allowNull: false,
        },

        
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'acuerdo_periodo',
        classMethods: {
            associate: function(models) {
                models.AcuerdoPeriodo.belongsTo(models.Acuerdo, {'foreignKey':'id_acuerdo', 'as':"idacuerdoperiodo"});
                 models.AcuerdoPeriodo.hasMany(models.CargaAsignatura, {'foreignKey':'id_acuerdo_periodo', 'as':"idcargaasignatura"});
                //models.Acuerdo.hasMany(models.AcuerdoPeriodo, {'foreignKey':'id_acuerdo_periodo', 'as':"idacuerdoperiodocargaasignatura"});
                
                
            }
        }
    });
    return AcuerdoPeriodo;
};
