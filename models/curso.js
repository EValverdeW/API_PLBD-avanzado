const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Curso = sequelize.define('curso', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        cuatrimestre: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [0, 20]
            }
        },
        creditos: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        idCarrera: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'ID_CARRERA',
            references: {
                model: 'CARRERA',
                key: 'ID'
            }
        }
    }, {
        tableName: 'CURSO',
        underscored: true,
        paranoid: true
    });

    Curso.associate = (models) => {
        Curso.belongsTo(models.carrera, {
            foreignKey: 'idCarrera',
            as: 'carrera'
        });
    };

    return Curso;
};
