'use strict';
const Code = require('code');
const Constants = require('../../../../client/pages/signup/constants');
const Lab = require('lab');
const Store = require('../../../../client/pages/signup/store');


const lab = exports.lab = Lab.script();


lab.experiment('Sign Up Store', () => {

    lab.test('it handles a REGISTER action', (done) => {

        Store.dispatch({
            type: Constants.REGISTER
        });

        const state = Store.getState();

        Code.expect(state.loading).to.be.true();
        Code.expect(state.success).to.be.false();

        done();
    });


    lab.test('it handles a REGISTER_RESPONSE action (success)', (done) => {

        Store.dispatch({
            type: Constants.REGISTER_RESPONSE,
            err: null,
            response: {}
        });

        const state = Store.getState();

        Code.expect(state.loading).to.be.false();
        Code.expect(state.success).to.be.true();

        done();
    });


    lab.test('it handles a REGISTER_RESPONSE action (validation errors)', (done) => {

        const response = {
            validation: {
                keys: ['name']
            },
            message: 'name is required'
        };

        Store.dispatch({
            type: Constants.REGISTER_RESPONSE,
            err: Error('sorry pal'),
            response
        });

        const state = Store.getState();

        Code.expect(state.loading).to.be.false();
        Code.expect(state.success).to.be.false();
        Code.expect(state.hasError).to.have.length(1);
        Code.expect(state.help).to.have.length(1);

        done();
    });


    lab.test('it handles a REGISTER_RESPONSE action (other error)', (done) => {

        const response = {
            message: 'something else failed'
        };

        Store.dispatch({
            type: Constants.REGISTER_RESPONSE,
            err: Error('sorry pal'),
            response
        });

        const state = Store.getState();

        Code.expect(state.loading).to.be.false();
        Code.expect(state.success).to.be.false();
        Code.expect(state.error).to.equal('something else failed');

        done();
    });
});
