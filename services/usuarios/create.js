const db = require ('../../models');
const bcrypt = require ('bcrypt');

async function create(usuario){
    if(!usuario.username) throw new Error ('El nombre de usuario es obligatorio');
    if(!usuario.password) throw new Error ('La contraseña es obligatoria');
    if(!usuario.email) throw new Error ('El correo es obligatorio');
    if(!usuario.estado) throw new Error ('El estado es obligatorio');
    if(!usuario.idRol) throw new Error ('El rol es obligatorio');

    return await db.usuario.create({
        username: usuario.username,
        password: await bcrypt.hashSync(usuario.password, 10),
        email: usuario.email,
        estado: usuario.estado,
        idRol: usuario.idRol
    });     

}
module.exports = {
    create
};