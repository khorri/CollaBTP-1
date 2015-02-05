// EmailService.js - in api/services

//TODO: tester si l'utilisateur a configurer sa boite mail

sails.inbox = require("inbox");

module.exports = {
	// TODO: retrieve email and show it in console
	init: function(user){
		client = sails.inbox.createConnection(false, user.settings.emailHost, {
			secureConnection: true,
			auth:{
				user: user.settings.emailUser,
				pass: user.settings.emailPassword
			}
		});

		client.connect();

		client.on("connect", function(){
			console.log("Successfully connected to server");

			client.openMailbox('INBOX', function(error, info){
				if(error){
					console.log(error);
				}
			});
		});

		client.on("new", function(m){
			console.log('new email');
			var chunks = [], chunklength = 0,
				stream = client.createMessageStream(m.UID);
			stream.on("data", function(chunk){
				chunks.push(chunk);
				chunklength += chunk.length;
			});
			stream.on("end", function(){
				var message = Buffer.concat(chunks, chunklength);
				console.log(message);
			});
		});

	},

	client: function(){
		return client;
	},

	close: function(){
		client.close();
	}
};
