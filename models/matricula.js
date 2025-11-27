const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Matricula = sequelize.define('matricula', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_inscripcion: {
            type: Sequelize.DATE,
            allowNull: true
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [0, 20]
            }
        },
        idEstudiante: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'ID_ESTUDIANTE',
            references: {
                model: 'ESTUDIANTE',
                key: 'ID'
            }
        }
    }, {
        tableName: 'MATRICULA',
        underscored: true,
        paranoid: true
    });

    Matricula.associate = (models) => {
        Matricula.belongsTo(models.estudiante, {
            foreignKey: 'idEstudiante',
            as: 'estudiante'
        });

        Matricula.hasMany(models.pago, {
            foreignKey: 'idMatricula',
            as: 'pagos'
        });

        Matricula.hasMany(models.calificacion, {
            foreignKey: 'idMatricula',
            as: 'calificaciones'
        });

        Matricula.hasMany(models.asistencia, {
            foreignKey: 'idMatricula',
            as: 'asistencias'
        });
    };

    return Matricula;
};
