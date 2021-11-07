const { Router } = require('express');
const { check } = require('express-validator');
const UploadsController = require("../controllers/uploads");

const { allowedEntities } = require('../helpers');
const validateFile = require('../middlewares/validate-file');

const {validateJWT, validateFields} = require('../middlewares');
const router = Router();

router.put("/:id", 
    validateJWT, validateFile,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('entity').custom( e => allowedEntities( e, ['users','datafiles'])),
    validateFields,
 UploadsController.updateFile);

// router.put('/:coleccion/:id', [
//     validarArchivoSubir,
//     check('id','El id debe de ser de mongo').isMongoId(),
//     check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
//     validarCampos
// ], actualizarImagenCloudinary )

// router.get('/:coleccion/:id', [
//     check('id','El id debe de ser de mongo').isMongoId(),
//     check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
//     validarCampos
// ], mostrarImagen  )

module.exports = router;