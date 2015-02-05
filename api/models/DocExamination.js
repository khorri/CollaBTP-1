/**
* DocExamination.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,
	attributes: {
		label: {
			type: 'string',
			required: true
		},
		desc: {
			type: 'text'
		},
		project: {
			model: 'Project'
		}

	}
};

