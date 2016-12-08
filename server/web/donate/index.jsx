'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class donatePage extends React.Component {
    render() {

        const feet = <script src="/public/pages/donate.min.js"></script>;

        return (
            <Layout
                title="Donate"
                feet={feet}
                activeTab="donate">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Subscriptions will go here</h1>
                        <p className="lead">
                        <i className="fa fa-cc-paypal bamf"></i>
                            Your donation is greatly appreciated.
                        </p>
                        <div>
                            Group5 Thanks you for your support!
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = donatePage;
