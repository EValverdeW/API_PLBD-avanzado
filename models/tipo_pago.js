const Sequelize = require('sequelize-oracle');

module.exports = (sequelize, DataTypes) => {

    const TipoPago = sequelize.define('tipo_pago', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        tipo: {
            type: Sequelize.STRING,
            allowNull: true,
            field: 'TIPO',
            validate: {
                len: [0, 50]
            }
        },
        idPago: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'ID_PAGO',
            references: {
                model: 'PAGO',
                key: 'ID'
            }
        }
    }, {
        tableName: 'TIPO_PAGO',
        underscored: true,
        paranoid: true
    });

    TipoPago.associate = (models) => {
        TipoPago.belongsTo(models.pago, {
            foreignKey: 'idPago',
            as: 'pago'
        });
    };

    return TipoPago;
};
