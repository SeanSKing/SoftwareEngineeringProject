'use strict';
const DetailsForm = require('./details-form.jsx');
const Actions = require('./actions');
const React = require('react');
const Store = require('./store');
const UserForm = require('./user-form.jsx');


class SettingsPage extends React.Component {
    constructor(props) {

        super(props);

        Actions.getDetails();
        Actions.getUser();

        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">My account</h1>
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>My Score</h3>

                                <small>score here...</small>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <h3># of Games Played</h3>

                                <small>####...</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h1 className="page-header">Throttle gauge</h1>
                        <div className="text-center">
                            <i className="fa fa-gamepad bamf"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = SettingsPage;
