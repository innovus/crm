var Express = require('express');
var Multipart=require('connect-multiparty')
var AcuerdoController= require('../controllers/acuerdoController');



var router = Express.Router();
var multipartMiddleware=Multipart();
/*
 * RUTAS Acuerdo
 */

router.get('/acuerdo', AcuerdoController.listarAcuerdos);
router.get('/acuerdo/:id', AcuerdoController.findById);
router.put('/acuerdo/:id', AcuerdoController.updateAcuerdo);
router.delete('/acuerdo/:id', AcuerdoController.deleteAcuerdo);
router.post('/acuerdo', AcuerdoController.createAcuerdo);

/**
*RUTA DE PRUEBAS 

router.post('/test',ProductoController.test);
*/

//--------------------------------------------------------
router.get('/acuerdoperiodo', AcuerdoController.listarAcuerdosPeriodo);
router.get('/acuerdoperiodo/:acuerdoPeriodo', AcuerdoController.findByIdAcuerdoPeriodo);
router.post('/acuerdoperiodo', AcuerdoController.createAcuerdoPeriodo);
router.put('/acuerdoperiodo/:id', AcuerdoController.updateAcuerdoPeriodo);
router.delete('/acuerdoperiodo/:id', AcuerdoController.deleteAcuerdoPeriodo);

module.exports = router;

