'use strict';


const internals = {};


internals.applyRoutes = function (server, next) {

    server.route({
        method: 'GET',
        path: '/teacheraccount/{glob*}',
        config: {
            auth: {
                strategy: 'session',
                scope: 'teacheraccount'
            }
        },
        handler: function (request, reply) {

            reply.view('teacheraccount/index');
        }
    });


    next();
};


exports.register = function (server, options, next) {

    server.dependency(['auth', 'hapi-mongo-models'], internals.applyRoutes);

    next();
};


exports.register.attributes = {
    name: 'web/teacheraccount'
};
