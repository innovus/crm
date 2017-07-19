'use strict';
module.exports = function(sequelize, DataTypes) {
    var IntensidadHoraria = sequelize.define('IntensidadHoraria', {
        
        id_intensidad_horaria:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_carga_asignatura:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_hora_tipo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },        
        intensidad_horaria_cantidad:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
               
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema:'udenar',
        tableName: 'intensidad_horaria',
        classMethods: {
            associate: function(models) {                
                 models.IntensidadHoraria.belongsTo(models.CargaAsignatura, {'foreignKey':'id_carga_asignatura', 'as':"idintensidadhoraria"});
                 models.IntensidadHoraria.belongsTo(models.HoraTipo, {'foreignKey':'id_hora_tipo', 'as':"idintensidadhorariatipo"});


               
            }
        }
    });
    return IntensidadHoraria;
};
