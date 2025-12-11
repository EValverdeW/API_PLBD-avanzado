const createService = require('../services/roles/create');
const findService = require('../services/roles/find');
const updateService = require('../services/roles/update');
const deleteService = require('../services/roles/delete');
 
async function _create(rol) {
    return await createService.create(rol);
}
 
async function _findAll() {
    return await findService.findAll();
}
 
async function _findById(id) {
    return await findService.findById(id);
}
 
async function _update(id, data) {
    return await updateService.update(id, data);
}
 
async function _delete(id) {
    return await deleteService.remove(id);
}
 
module.exports = {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
};