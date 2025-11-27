// Importo el servicio para CREAR usuarios
const { create: createUser } = require('../services/usuarios/create');

// Importo el servicio para BUSCAR usuarios
const { findByUsername } = require('../services/usuarios/find');

async function _create(usuario) {
    return await createUser(usuario);
}

async function _findByUsername(username) {
    return await findByUsername(username);
}

module.exports = {
    _create,
    _findByUsername
};
