/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    create: function(req, res) {
		Project.create(req.params.all()).exec(function(error, result) {
                if (error) {
                    res.json({error: "DB Error"});
                } else {
                    res.json(result);
                }
            });
    },

	getAll: function(req, res){
		Project.find().where({'isDeleted':false}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
	
	getById: function(req, res){
		Project.find({'id':req.param('id')}).populateAll().exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result[0]);
			}
		});
	},
	
	remove: function(req, res){
		Project.update({id:req.param('projectID')}, {'isDeleted': true}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
};

