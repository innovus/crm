var Respuesta= require("../helpers/respuesta");
var Fs= require("fs");
var Mv= require("mv");


var guardarArchivo= function(req,res){
	
	
	var archivo=req.files.archivo;
	var tmp_path = archivo.path
	var nombre=req.body.nombre
	var dir = process.env.RUTA_ARCHIVOS;
	if (!Fs.existsSync(dir)){
	    Fs.mkdirSync(dir,0777);
	}
	target_path=process.env.RUTA_ARCHIVOS+"/"+nombre+".pdf";
	console.log(tmp_path,target_path);
    Mv(tmp_path, target_path, function(err) {
        if(err){
        	console.log("errorrrrr!!");
        	console.error(err.stack);	
        } 
        else{
    		Respuesta.sendJsonResponse(res,200,{"message":"todo bien!! pero no sube el archivo ups :(!!"});        	
        }
    });
};

module.exports.guardarArchivo=guardarArchivo