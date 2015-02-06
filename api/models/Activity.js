/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        status: {
            type: 'string',
            required: true,
            enum: ['open', 'in progress', 'closed'],
            defaulsTo: 'open'
        },
        description: {
            type: 'string',
        },
        date: {
            type: 'date',
            defaultsTo: new Date()
        },
        project: {
            model: 'Project',
            required: true
        },
        contributors: {
            collection: 'User',
            via: 'activities',
        },
        files: {
            collection: 'File',
            via: 'activity'
        }
    }
};