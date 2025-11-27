const db = require('../../models');

async function _findByUsername(username) {
    console.log("Buscando usuario en BD:", username);
    console.log("Modelos disponibles:", Object.keys(db));

    if (!username) {
        console.log("ERROR: Username viene vacío o undefined.");
        return null;  // Evita hacer una búsqueda inválida
    }

    const user = await db.usuario.findOne({
        where: { username }   
    });

    console.log("Resultado de búsqueda en Oracle:", user);

    return user;
}

module.exports = {
    _findByUsername
};
