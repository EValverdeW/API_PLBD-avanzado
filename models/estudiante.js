const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Estudiante = sequelize.define('estudiante', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
                len: [5, 100]
            }
        },
        fecha_nacimiento: {
            type: Sequelize.DATE,
            allowNull: true
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [0, 15]
            }
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [0, 200]
            }
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
        tableName: 'ESTUDIANTE',
        underscored: true,
        paranoid: true
    });

    Estudiante.associate = (models) => {
        Estudiante.belongsTo(models.carrera, {
            foreignKey: 'idCarrera',
            as: 'carrera'
        });

        Estudiante.hasMany(models.matricula, {
            foreignKey: 'idEstudiante',
            as: 'matriculas'
        });

        Estudiante.hasMany(models.encargado_estudiante, {
            foreignKey: 'idEstudiante',
            as: 'encargados'
        });
    };

    return Estudiante;
};
