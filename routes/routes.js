const express = require('express');
const { check } = require('express-validator')
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios, getUsuario } = require('../controllers/controllers');
const router = express.Router();


router.get('/', getUsuarios);
router.get('/:_id', getUsuario);
router.post('/', [
    check('nombre', 'required name').not().isEmpty(),
    check('nombreUsuario', 'required username').not().isEmpty(),
    check('contraseña', 'required password').not().isEmpty(),
    check('correo', 'required email').not().isEmpty(),
    check('correo', 'invalid email').isEmail(),
], postUsuarios);
router.put('/:_id', putUsuarios);
router.delete('/:_id', deleteUsuarios);

module.exports = router;