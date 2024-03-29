'use strict';
const Actions = require('./actions');
const Alert = require('../../components/alert.jsx');
const Button = require('../../components/form/button.jsx');
const ControlGroup = require('../../components/form/control-group.jsx');
const React = require('react');
const Spinner = require('../../components/form/spinner.jsx');
const Store = require('./store');
const TextControl = require('../../components/form/text-control.jsx');
const TextareaControl = require('../../components/form/textarea-control.jsx');


class Form extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

        if (this.input.name) {
            this.input.name.focus();
        }
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    handleSubmit(event) {

        event.preventDefault();
        event.stopPropagation();

        Actions.sendMessage({
            name: this.input.name.value(),
            email: this.input.email.value(),
            message: this.input.message.value()
        });
    }

    render() {

        let alert = [];

        if (this.state.success) {
            alert = <Alert
                type="success"
                message="Success.We have received your message."
            />;
        }
        else if (this.state.error) {
            alert = <Alert
                type="danger"
                message={this.state.error}
            />;
        }

        let formElements;

        if (!this.state.success) {
            formElements = <fieldset>
                <TextControl
                    ref={(c) => (this.input.name = c)}
                    name="name"
                    label="Your Name:"
                    hasError={this.state.hasError.name}
                    help={this.state.help.name}
                    disabled={this.state.loading}
                />
                <TextControl
                    ref={(c) => (this.input.email = c)}
                    name="email"
                    label="Your Email Address:"
                    hasError={this.state.hasError.email}
                    help={this.state.help.email}
                    disabled={this.state.loading}
                />


                <Alert type="danger"
                message="
                User input field for donation amount will go here.

                It's currently hard-coded to be $5"/>
               


                <TextareaControl
                    ref={(c) => (this.input.message = c)}
                    name="message"
                    label="Leave us a message along with your donation:"
                    rows="5"
                    hasError={this.state.hasError.message}
                    help={this.state.help.message}
                    disabled={this.state.loading}
                />
                <ControlGroup hideLabel={false} hideHelp={false}>
               <Alert
                type="success"
                message="You will be directed to PayPal.com to make a donation of $5.00.
                After successfully completing the transaction you will be directed to the home page."
            />


                    <Button
                        type="submit"
                        inputClasses={{ 'btn-primary': true }}
                        disabled={this.state.loading}>

                        Donate
                        <Spinner space="left" show={this.state.loading} />
                    </Button>
                </ControlGroup>
            </fieldset>
        }

        return (
            <section>
                <h1 className="page-header">Donate</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {alert}
                    {formElements}
                </form>
            </section>
        );
    }
}


module.exports = Form;
