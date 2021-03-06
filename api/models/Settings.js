/**
* Settings.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,
	attributes: {
		notifications: {
			type: 'boolean',
			defaultsTo: true
		},
		emailConfig: {
			type: 'boolean',
			defaultsTo: false
		},
		emailHost: {
			type: 'string'
		},
		emailUser: {
			type: 'string'
		},
		emailPassword:{
			type: 'string'
		},
		owner:{
			model:'User'
		}
	}
};

