const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Calificacion = sequelize.define('calificacion', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nota: {
            type: Sequelize.DECIMAL(5,2),
            allowNull: true
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: true
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
        tableName: 'CALIFICACION',
        underscored: true,
        paranoid: true
    });

    Calificacion.associate = (models) => {
        Calificacion.belongsTo(models.matricula, {
            foreignKey: 'idMatricula',
            as: 'matricula'
        });
    };

    return Calificacion;
};
