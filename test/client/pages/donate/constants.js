'use strict';
const Code = require('code');
const Constants = require('../../../../client/pages/donate/constants');
const Lab = require('lab');


const lab = exports.lab = Lab.script();


lab.experiment('Dontact Constants', () => {

    lab.test('it loads', (done) => {

        Code.expect(Constants).to.exist();

        done();
    });
});
