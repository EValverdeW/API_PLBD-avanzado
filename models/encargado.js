const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Encargado = sequelize.define('encargado', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { len: [1, 50] }
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { len: [1, 100] }
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { len: [0, 15] }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { isEmail: true, len: [5, 100] }
        }
    }, {
        tableName: 'ENCARGADO',
        underscored: true,
        paranoid: true
    });

    Encargado.associate = (models) => {};

    return Encargado;
};
