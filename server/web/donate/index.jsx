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
                        <h1 className="page-header">Subsriptions here</h1>
                        <p className="lead">
                            Your donation is greatly appreciated.
                        </p>
                        <i className="fa fa-reply-all bamf"></i>
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
