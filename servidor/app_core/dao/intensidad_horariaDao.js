var Models=require("../../app_core/models/index");
var sequelize = Models.sequelize;
var Q= require("q");

var create= function(intensidadHoraria){
    return Models.IntensidadHoraria.create({
        id_carga_asignatura:intensidadHoraria.id_carga_asignatura,
        id_hora_tipo:intensidadHoraria.id_hora_tipo,
        intensidad_horaria_cantidad:intensidadHoraria.intensidad_horaria_cantidad
    });
};

module.exports.create=create
