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
    desc: {
      type: 'text'
    },
    status: {
      type: 'string',
      defaultsTo: 'new'
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
    tasks: {
      collection: 'Task',
      via: 'project'
    },
	owner: {
	  model: 'User'
  	},
    customer: {
	  model: 'Customer'
  	},
    participants: {
	  collection: 'Participant',
      via: 'projects',
      dominant: true    
  	},  
	isDeleted: {
		type:'boolean',
		defaultsTo: false
	},
	docExaminations:{
		collection: 'DocExamination',
		via: 'project'
	}  
  }
};

