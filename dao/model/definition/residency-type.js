'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ResidencyType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ResidencyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ResidencyType = model.ResidencyType;

};
