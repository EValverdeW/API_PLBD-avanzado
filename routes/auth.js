const express = require('express');
const { _create } = require('../controllers/usuarios');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        console.log("BODY QUE RECIBO:", req.body); // <<< LOG 1

        const usuario = await _create(req.body);

        console.log("LO QUE RETORNA _create:", usuario); // <<< LOG 2

        return res.status(201).json({
            status: 'success',
            message: `El usuario ${usuario.username} ha sido creado correctamente...`
        });

    } catch (error) {
        console.log("ERROR:", error); // <<< LOG 3
        return res.status(500).json(error.message);
    }
});

module.exports = router;
