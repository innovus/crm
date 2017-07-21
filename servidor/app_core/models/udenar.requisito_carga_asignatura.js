'use strict';
module.exports = function(sequelize, DataTypes) {
    var RequisitoCargaAsignatura = sequelize.define('RequisitoCargaAsignatura', {
        
        id_requisito:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },
        id_carga_asignatura:{
        	type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },

     }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'requisito_carga_asignatura',
        classMethods: {
            associate: function(models) {
               // models.Acuerdo.hasMany(models.AcuerdoPeriodo, {'foreignKey':'id_acuerdo', 'as':"idacuerdoperiodo"});
                
            }
        }
    });
    return RequisitoCargaAsignatura;
};
