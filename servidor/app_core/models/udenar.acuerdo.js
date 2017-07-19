'use strict';
module.exports = function(sequelize, DataTypes) {
    var Acuerdo = sequelize.define('Acuerdo', {
        
        id_acuerdo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },

        acuerdo_tipo:{
            type: DataTypes.STRING(1),
            allowNull: false
        },

        fec_inicial:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fec_final:{
            type: DataTypes.DATE,
            allowNull: true
        },
        id_programa:{
            type: DataTypes.INTEGER,
            allowNull: true
        },

        acuerdo_vigente:{
            type: DataTypes.STRING(1),
            allowNull: true,
        },

        
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'acuerdo',
        classMethods: {
            associate: function(models) {
                models.Acuerdo.hasMany(models.AcuerdoPeriodo, {'foreignKey':'id_acuerdo', 'as':"idacuerdoperiodo"});
                
            }
        }
    });
    return Acuerdo;
};
