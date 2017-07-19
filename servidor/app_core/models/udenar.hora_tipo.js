'use strict';
module.exports = function(sequelize, DataTypes) {
    var HoraTipo = sequelize.define('HoraTipo', {
        
        id_hora_tipo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        asignatura_hora_tipo_detalle:{
            type: DataTypes.STRING(400),
            allowNull: false
        },
       
               
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'hora_tipo',
        classMethods: {
            associate: function(models) {                
                models.HoraTipo.hasMany(models.IntensidadHoraria, {'foreignKey':'id_hora_tipo', 'as':"idintensidadhorariatipo"});

               
            }
        }
    });
    return HoraTipo;
};
