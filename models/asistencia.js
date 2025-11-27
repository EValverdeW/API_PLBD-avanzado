const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Asistencia = sequelize.define('asistencia', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
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
        idMatricula: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'ID_MATRICULA',
            references: {
                model: 'MATRICULA',
                key: 'ID'
            }
        }
    }, {
        tableName: 'ASISTENCIA',
        underscored: true,
        paranoid: true
    });

    Asistencia.associate = (models) => {
        Asistencia.belongsTo(models.matricula, {
            foreignKey: 'idMatricula',
            as: 'matricula'
        });
    };

    return Asistencia;
};
