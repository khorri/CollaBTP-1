/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
	 ref: {
		 type: 'string',
		 required: true,
		 unique: true
	  },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text'
    },
    status: {
      type: 'string',
      defaultsTo: ''
    },
	budget: {
		type: 'float',
		defaultsTo: 0.0
	},
	starts: {
		type: 'date',
		defaultsTo: new Date()
	},
	ends: {
	  type: 'date'
	},
    tasks:{
      collection: 'task',
      via: 'owner'
    },
	owner:{
	  model: 'User'
  	},
	isDeleted:{
		type:'boolean',
		defaultsTo: false
	}
  }
};

