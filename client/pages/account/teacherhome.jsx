'use strict';
const Moment = require('moment');
const React = require('react');


class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();
    }

    componentDidMount() {

        this.interval = setInterval(this.refreshTime.bind(this), 1000);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {

        this.setState(this.getThisMoment());
    }

    getThisMoment() {

        const thisMoment = Moment();

        return {
            second: thisMoment.format('ss'),
            minute: thisMoment.format('mm'),
            hour: thisMoment.format('HH'),
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: thisMoment.format('YYYY')
        };
    }

    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">My account</h1>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>HEY HEY</p>>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h1 className="page-header">Throttle guage</h1>
                        <div className="text-center">
                            <i className="fa fa-dashboard bamf"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
