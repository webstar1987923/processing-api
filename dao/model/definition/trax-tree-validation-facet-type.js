'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationFacetType', {
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeValidationFacetType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationFacetType = model.TraxTreeValidationFacetType;
    var TraxTreeValidationFacet = model.TraxTreeValidationFacet;

    TraxTreeValidationFacetType.hasMany(TraxTreeValidationFacet, {
        as: 'TraxTreeValidationFacetTraxtreevalidationfacettypeFks',
        foreignKey: 'ValidationFacetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
