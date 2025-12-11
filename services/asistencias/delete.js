const db = require('../../models');


async function remove(id) {
    if (!id) throw new Error('ID requerido para eliminar');

    const asistencia = await db.asistencia.findOne({ where: { id } });
    if (!asistencia) throw new Error('Asistencia no encontrada');

    await asistencia.destroy();
    return { message: 'Asistencia eliminada correctamente' };
}

module.exports = { remove };
