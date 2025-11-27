const db = require('../../models');

async function create(rol) {
    if (!rol.cargo) throw new Error('El cargo es obligatorio');
    if (!rol.estado) throw new Error('El estado es obligatorio');

    const nuevoRol = await db.rol.create({
        cargo: rol.cargo,
        estado: rol.estado
    });

    // Convertimos a un objeto plano para que sus propiedades se puedan leer directamente
    return nuevoRol.get({ plain: true });
}

module.exports = {
    create
};
