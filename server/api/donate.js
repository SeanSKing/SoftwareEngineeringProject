'use strict';
const Config = require('../../config');
const Joi = require('joi');


const internals = {};


internals.applyRoutes = function (server, next) {

    server.route({
        method: 'POST',
        path: '/donate',
        config: {
            validate: {
                payload: {
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    message: Joi.string().required()
                }
            }
        },
        handler: function (request, reply) {

            const mailer = server.plugins.mailer;
            const emailOptions = {
                subject: Config.get('/projectName') + ' Donation Message',
                to: Config.get('/system/toAddress'),
                replyTo: {
                    name: request.payload.name,
                    address: request.payload.email
                }
            };
            const template = 'donate';

            mailer.sendEmail(emailOptions, template, request.payload, (err, info) => {

                if (err) {
                    return reply(err);
                }

                reply({ message: 'Success.' });
            });
        }
    });


    next();
};


exports.register = function (server, options, next) {

    server.dependency('mailer', internals.applyRoutes);

    next();
};


exports.register.attributes = {
    name: 'donate'
};
