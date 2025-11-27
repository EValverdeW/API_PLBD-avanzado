const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const EncargadoEstudiante = sequelize.define('encargado_estudiante', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        parentesco: {
            type: Sequelize.STRING,
            allowNull: true,
            field: 'PARENTESCO',
            validate: {
                len: [0, 50]
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
        },
        idEncargado: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'ID_ENCARGADO',
            references: {
                model: 'ENCARGADO',
                key: 'ID'
            }
        }
    }, {
        tableName: 'ENCARGADO_ESTUDIANTE',
        underscored: true,
        paranoid: true
    });

    EncargadoEstudiante.associate = (models) => {
        EncargadoEstudiante.belongsTo(models.estudiante, {
            foreignKey: 'idEstudiante',
            as: 'estudiante'
        });

        EncargadoEstudiante.belongsTo(models.encargado, {
            foreignKey: 'idEncargado',
            as: 'encargado'
        });
    };

    return EncargadoEstudiante;
};
