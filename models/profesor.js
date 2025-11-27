const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Profesor = sequelize.define('profesor', {
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { isEmail: true, len: [5, 100] }
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { len: [0, 15] }
        },
        fecha_nacimiento: {
            type: Sequelize.DATE,
            allowNull: true
        },
        ciudad: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { len: [0, 50] }
        }
    }, {
        tableName: 'PROFESOR',
        underscored: true,
        paranoid: true
    });

    Profesor.associate = (models) => {};

    return Profesor;
};
