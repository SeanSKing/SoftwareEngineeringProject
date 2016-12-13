'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/donate',
        handler: function (request, reply) {

            reply.view('donate/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/donate'
};
