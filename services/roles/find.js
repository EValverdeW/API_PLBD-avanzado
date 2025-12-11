const db = require('../../models');
 
async function findAll() {
    return await db.rol.findAll({
        attributes: [
            ['id', 'ID'],
            ['cargo', 'NOMBRE'],
            ['estado', 'ESTADO'],
            ['created_at', 'FECHA_CREACION'],
            ['updated_at', 'FECHA_ACTUALIZACION'],
            ['deleted_at', 'FECHA_ELIMINACION']
        ],
        raw: true
    });
}
 
async function findById(id) {
    return await db.rol.findByPk(id, {
        attributes: [
            ['id', 'ID'],
            ['cargo', 'NOMBRE'],
            ['estado', 'ESTADO'],
            ['created_at', 'FECHA_CREACION'],
            ['updated_at', 'FECHA_ACTUALIZACION'],
            ['deleted_at', 'FECHA_ELIMINACION']
        ],
        raw: true
    });
}
 
module.exports = { findAll, findById };