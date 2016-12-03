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
            <section className="container">
                <h1 className="page-header">Profile</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <DetailsForm {...this.state.details} />
                        <UserForm {...this.state.user} />
                        <h3>My Score</h3>

                        <small>score here...</small>

                        <h3># of Games Played</h3>

                        <small>####...</small>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = SettingsPage;
