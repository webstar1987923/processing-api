'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyemail', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_PartyEmailSequenceView_seq_nextval\"("
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        emailAddressID: {
            type: DataTypes.INTEGER,
            field: 'EmailAddressID',
            allowNull: false
        },
        emailTypeID: {
            type: DataTypes.INTEGER,
            field: 'EmailTypeID',
            allowNull: false
        },
        communicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'CommunicationTypeID',
            allowNull: false
        },
        locationTypeID: {
            type: DataTypes.INTEGER,
            field: 'LocationTypeID',
            allowNull: false
        },
        preferredEmail: {
            type: DataTypes.BOOLEAN,
            field: 'PreferredEmail',
            allowNull: true
        },
        priority: {
            type: DataTypes.INTEGER,
            field: 'Priority',
            allowNull: true
        },
        optOut: {
            type: DataTypes.BOOLEAN,
            field: 'OptOut',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyEmail',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyemail = model.CrumbsPartyemail;

};
