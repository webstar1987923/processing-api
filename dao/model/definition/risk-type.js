'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RiskType', {
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'RiskType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RiskType = model.RiskType;
    var RiskDescriptionType = model.RiskDescriptionType;

    RiskType.hasMany(RiskDescriptionType, {
        as: 'RiskDescriptionTypeRisktypeFks',
        foreignKey: 'RiskTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
