const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const Pago = sequelize.define('pago', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_pago: {
            type: Sequelize.DATE,
            allowNull: true
        },
        monto: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true
        },
        metodo_pago: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [0, 50]
            }
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
        tableName: 'PAGO',
        underscored: true,
        paranoid: true
    });

    Pago.associate = (models) => {
        Pago.belongsTo(models.matricula, {
            foreignKey: 'idMatricula',
            as: 'matricula'
        });

        Pago.hasMany(models.tipo_pago, {
            foreignKey: 'idPago',
            as: 'tipos_pagos'
        });
    };

    return Pago;
};
