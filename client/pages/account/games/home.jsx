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
                        <h1 className="page-header">Arithmetic Attack v1.00</h1>
                        <div className="row">
                            <div className="col-sm-6">
                            <a href="javascript:window.open('/public/media/game1/index.html','game','width=screen.width,height=screen.height,left=0,top=0');"><h2>Click Here to Play</h2></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Algebra Attack</h1>
                        <div className="row">
                            <div className="col-sm-6">
                            COMING SOON
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Geometry Attack</h1>
                        <div className="row">
                            <div className="col-sm-6">
                         COMING SOON
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </section>
        );
    }
}


module.exports = HomePage;
