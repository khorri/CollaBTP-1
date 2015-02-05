/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	signup: function(req, res){
		if (req.session.authenticated) {
			res.redirect('/myspace')
		}
		res.view({ layout: 'staticlayout'});
	},
	
	create: function(req, res){
		User.create( req.params.all(), function userCreated(err, user){
			if(err){
				console.log(err);
				req.session.flash = {
					err: err
				}
				
				return res.redirect('/signup');
			}
			
			req.session.authenticated = true;
			req.session.user = user;
			
			user.online	= true;
			user.save(function(err, user){
				if(err) return next(err)
				
				User.publishCreate(user);
				res.redirect('/myspace');
			});
		});
	},
	
	loggedUser :function(req, res, next){
		res.json(req.session.user)
	},
	
	subscribe: function(req, res){
		User.find({id:req.param('userID')}).exec(function found(err, user){
		 if(err) return next(err);
		 	User.subscribe(req.socket, user, ['update','destroy']);
			console.log('subscribed to: '+user.email);
		 	res.send(200);
	 });	
		
	}
};

