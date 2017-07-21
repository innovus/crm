'use strict';
module.exports = function(sequelize, DataTypes) {
    var Requisito = sequelize.define('Requisito', {
        
        id_requisito:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },

        requisito_tipo:{
            type: DataTypes.STRING(1),
            allowNull: false
        },
        id_asignatura:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_acuerdo_periodo:{
            type: DataTypes.INTEGER,
            allowNull: true
        },

        requisito_observacion:{
            type: DataTypes.STRING(400),
            allowNull: false
        },


        
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'requisito',
        classMethods: {
            associate: function(models) {
                models.CargaAsignatura.belongsToMany(models.Requisito,{through: models.RequisitoCargaAsignatura});
               
                
            }
        }
    });
    return Requisito;
};
