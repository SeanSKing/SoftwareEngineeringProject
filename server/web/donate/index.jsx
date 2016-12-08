'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class DonatePage extends React.Component {
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
                        <h1 className="page-header">Subscriptions here</h1>
                        <p className="lead">
                            Your donation is greatly appreciated.
                        </p>
                        <i className="fa fa-cc-paypal bamf"></i>
                        <div>
                            Group5 Thanks you for your support! Subscriptions coming soon
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = DonatePage;
