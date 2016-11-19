'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class ContactPage extends React.Component {
    render() {

        const feet = <script src="/public/pages/contact.min.js"></script>;

        return (
            <Layout
                title="Donate"
                feet={feet}
                activeTab="contact">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Subsriptions here</h1>
                        <p className="lead">
                            Your donation is greatly appreciated.
                        </p>
                        <i className="fa fa-reply-all bamf"></i>
                        <div>
                            Group5 would like to thank our users for their generous donations.
                            Here at Group5 we are striving to bring you the best content we
                            can possibly provide. Thanks to our supporters we have received a
                            total of $2,000!!! We have since spent $727 for development
                            software for the team, as well as licences for use of some
                            dependencies. We will continue to post on this page in order
                            to provide you all with updates as to what your money is going
                            toward. Thank you everyone who donated, you are the reason we are
                            able to keep doing what we're doing.
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = ContactPage;
