'use strict';
const DetailsForm = require('./details-form.jsx');
const Actions = require('./actions');
const React = require('react');
const Store = require('./store');
const UserForm = require('./user-form.jsx');
const TextControl = require('../../../components/form/text-control.jsx');


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
                        <TextControl
                            name="score"
                            label="My Score"
                            disabled={true}
                        />
                        <TextControl
                            name="numberOfGames"
                            label="# of Games"
                            disabled={true}
                        />
                    </div>
                    <div className="col-sm-6">
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
