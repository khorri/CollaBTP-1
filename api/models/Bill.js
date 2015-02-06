/**
 * Bill.js
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
        amount: {
            type: 'float',
            required: true
        },
        description: {
            type: 'string'
        },
        isPaid: {
            type: 'boolean',
            defaultsTo: false 
        },
        project: {
            model: 'Project',
            required: true
        },
        paymentMethod: {
            model: 'PaymentMethod',
            required: true
        }
    }
};