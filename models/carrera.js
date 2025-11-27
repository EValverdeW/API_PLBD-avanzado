const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Carrera = sequelize.define('carrera', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { len: [1, 100] }
        },
        duracion: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { len: [0, 50] }
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: { len: [0, 20] }
        }
    }, {
        tableName: 'CARRERA',
        underscored: true,
        paranoid: true
    });

    Carrera.associate = (models) => {
        Carrera.hasMany(models.curso, {
            foreignKey: 'idCarrera',
            as: 'cursos'
        });

        Carrera.hasMany(models.estudiante, {
            foreignKey: 'idCarrera',
            as: 'estudiantes'
        });
    };

    return Carrera;
};
