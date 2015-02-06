/**
 * PaymentMethod.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    attributes: {
        content: {
            type: 'string',
            required: true
        },
        percentage: {
            type: 'integer ',
            required: true
        },
        project: {
            model: 'Project',
            required: true
        },
        bill: {
            model: 'Bill',
            required: true
        }
    }
};