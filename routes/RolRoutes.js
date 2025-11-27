const express = require('express');
const { _create } = require('../controllers/roles');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const rol = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `El rol ${rol.cargo} ha sido creado correctamente...` // << backticks aquí
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

module.exports = router;
