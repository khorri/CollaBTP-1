/**
 * DocExaminationController
 *
 * @description :: Server-side logic for managing Docexaminations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res) {
		DocExamination.create(req.params.all()).exec(function(error, result) {
			if (error) {
				res.json({error: "DB Error"});
			} else {
				res.json(result);
			}
		});
	},

	getAll: function(req, res){
		DocExamination.find().where({'isDeleted':false}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
	
	getAllByProject: function(req, res){
		DocExamination.find().where({'project':req.param('projectID')}).where({'isDeleted':false}).populate('project').exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},

	remove: function(req, res){
		DocExamination.update({id:req.param('DocExaminationID')}, {'isDeleted': true}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
	
};

