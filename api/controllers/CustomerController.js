/**
 * CustomerController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res) {
		Customer.create(req.params.all()).exec(function(error, result) {
                if (error) {
                    res.json({error: "DB Error"});
                } else {
                    res.json(result);
                }
            });
    },

	getAll: function(req, res){
		Customer.find().where({'isDeleted':false}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
	
	remove: function(req, res){
		Customer.update({id:req.param('CustomerID')}, {'isDeleted': true}).exec(function(err, result){
			if (err){
				res.send(500, {error: err});
			}else{
				res.json(result);
			}
		});
	},
};

