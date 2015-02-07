/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
    /*Bootstraping Data*/

    User.create({
        'name': 'Admin Cadroctect',
        'email': 'admin@cadroctect.com',
        'password': '12345',
        'confirmation': '12345'
    }, function userCreated(err, user) {
        if (err) {
            console.log(err);
        }
        Project.create({
        'ref': 'ref0457',
        'name': 'Le Grand Stade de Casablanca',
        'desc': 'Ceci est la description du projet ref0457',
        'budget': '3520000',
        'projectLeader': user    
    }, function projectCreated(err, project) {
        if (err) {
            console.log(err);
        }
    });
    Project.create({
        'ref': 'ref9746',
        'name': "Extension du campus de l'UIC",
        'desc': 'Ceci est la description du projet ref9746',
        'budget': '1500000',
        'projectLeader': user  
    }, function projectCreated(err, project) {
        if (err) {
            console.log(err);
        }
    });
    Project.create({
        'ref': 'ref1937',
        'name': 'Travaux de rénovation public',
        'desc': 'Ceci est la description du projet ref1937',
        'budget': '2500000',
        'projectLeader': user  
    }, function projectCreated(err, project) {
        if (err) {
            console.log(err);
        }
    });
    });

    Type.create({
        'name': 'Type Participant 1',
        'description': 'Description du Type 1'
    }, function typeCreated(err, type) {
        if (err) {
            console.log(err);
        }
        Participant.create({
            'contactPerson': 'Badr Mehdaoui',
            'company': 'Obvision',
            'description': 'Description du participant',
            'email': 'b.mehdaoui@medprod.ma',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.medprod.ma',
            'zip': '14020',
            'city': 'Kénitra',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });
        Participant.create({
            'contactPerson': 'Nizar Oukhchi',
            'company': 'Obvision',
            'description': 'Description du participant',
            'email': 'n.oukhchi@medprod.ma',
            'phone': '0537372476',
            'cellphone': '0685947532',
            'url': 'www.medprod.ma',
            'zip': '14020',
            'city': 'Kénitra',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });

    });

    Type.create({
        'name': 'Type Participant 2',
        'description': 'Description du Type 2'
    }, function typeCreated(err, type) {
        if (err) {
            console.log(err);
        }
        Participant.create({
            'contactPerson': 'Amine Griche',
            'company': 'Obvision',
            'description': 'Description du participant',
            'email': 'a.griche@medprod.ma',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.medprod.ma',
            'zip': '17000',
            'city': 'Casablanca',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });
        Participant.create({
            'contactPerson': 'Khalid Hourri',
            'company': 'Company',
            'description': 'Description du participant',
            'email': 'k.hourri@company.ma',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.company.ma',
            'zip': '17000',
            'city': 'Casablanca',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });
    });

    Type.create({
        'name': 'Type Client',
        'description': 'Description du Type Client'
    }, function typeCreated(err, type) {
        if (err) {
            console.log(err);
        }
        Customer.create({
            'contactPerson': 'Badr Mehdaoui',
            'company': 'Obvision',
            'description': 'Description du client',
            'email': 'b.mehdaoui@medprod.ma',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.medprod.ma',
            'zip': '14020',
            'city': 'Kénitra',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });
        Customer.create({
            'contactPerson': 'Nizar Oukhchi',
            'company': 'Obvision',
            'description': 'Description du client',
            'email': 'n.oukhchi@medprod.ma',
            'phone': '0537372476',
            'cellphone': '0685947532',
            'url': 'www.medprod.ma',
            'zip': '14020',
            'city': 'Kénitra',
            'country': 'Maroc',
            'type': type
        }, function participantCreated(err, participant) {
            if (err) {
                console.log(err);
            }
        });

        Customer.create({
            'contactPerson': 'Amine Griche',
            'company': 'Obvision',
            'description': 'Description du client',
            'email': 'a.griche@medprod.ma',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.medprod.ma',
            'zip': '17000',
            'city': 'Casablanca',
            'country': 'Maroc',
            'type': type
        }, function customerCreated(err, customer) {
            if (err) {
                console.log(err);
            }
        });
        Customer.create({
            'contactPerson': 'Khalid Hourri',
            'company': 'Integradis Europe',
            'description': 'Description du client',
            'email': 'k.hourri@integradis.eu',
            'phone': '0537378976',
            'cellphone': '0665759077',
            'url': 'www.company.ma',
            'zip': '17000',
            'city': 'Casablanca',
            'country': 'Maroc',
            'type': type
        }, function customerCreated(err, customer) {
            if (err) {
                console.log(err);
            }
        });

    });

    /*End of Bootstraping Data*/

    User.update({}, {
            online: false
        },
        function userUpdated(err, users) {
            if (err) {
                console.log(err);
            } else {

            }
            cb();
        }
    )
};