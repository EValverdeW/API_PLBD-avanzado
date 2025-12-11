const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/roles');

const router = express.Router();

// CREATE
router.post('/signup', async (req, res) => {
    try {
        const rol = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `El rol ${rol.cargo} ha sido creado correctamente...`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const roles = await _findAll();
        return res.json(roles);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const rol = await _findById(req.params.id);
        return res.json(rol);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const rol = await _update(req.params.id, req.body);
        return res.json({
            status: 'success',
            message: `El rol ${rol.cargo} ha sido actualizado correctamente...`,
            rol
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const result = await _delete(req.params.id);
        return res.json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});


// LISTAR TODOS
router.get('/', async (req, res) => {
    try {
        const roles = await rolesController._findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
module.exports = router;

