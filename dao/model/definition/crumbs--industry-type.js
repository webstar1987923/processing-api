'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsIndustrytype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        aNZSICCode: {
            type: DataTypes.STRING(10),
            field: 'ANZSICCode',
            allowNull: true
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
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_IndustryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsIndustrytype = model.CrumbsIndustrytype;

};
