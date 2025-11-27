// controllers/roles.js
const { create } = require('../services/roles/create');

async function _create(rol) {
    return await create(rol);
}

module.exports = {
    _create
};
