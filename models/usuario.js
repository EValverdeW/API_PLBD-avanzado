const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('usuario', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [3, 50]
            }
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [6, 100]
            }
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [5, 100]
            }
        },
        estado:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            }
        },
        idRol: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'ROL',
                key: 'id'
            },
            field: 'idRol'
        }
    }, {
        tableName: 'USUARIO',
        underscored: true,
        paranoid: true
    });

    Usuario.associate = (models) => {
        Usuario.belongsTo(models.rol, {
            foreignKey: 'idRol',
            as: 'rol'
        });
    };

    return Usuario;
};
