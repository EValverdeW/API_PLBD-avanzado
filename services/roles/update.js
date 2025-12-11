


const db = require('../../models');
 
async function update(id, data) {
    const rol = await db.rol.findByPk(id);
    if (!rol) throw new Error('Rol no encontrado');
 
    await rol.update({
        cargo: data.cargo || rol.cargo,
        estado: data.estado || rol.estado,
        deleted_at: data.deleted_at || rol.deleted_at // SOLO SI EXISTE
    });
 
    return rol.get({ plain: true });
}
 
module.exports = { update };