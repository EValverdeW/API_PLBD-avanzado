const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Rol = sequelize.define('rol', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cargo: {
            type: Sequelize.STRING,
            allowNull: false,
                validate: {
            len: [3, 50]},
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false,
             validate: {
            len: [5, 20]},
        }
    }, {
        tableName: 'ROL', // 👈 nombre exacto de la tabla en Oracle
        underscored: true,
        paranoid: true
    });

    // Relación inversa (hasMany)
    Rol.associate = (models) => {
        Rol.hasMany(models.usuario, {
            foreignKey: 'idRol',
            as: 'usuarios'
        });
    };

    return Rol;
};
