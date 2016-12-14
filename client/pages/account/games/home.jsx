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

                <div class="jumbotron">
                  <div class="container">
                    <h1 class="display-3">Welcome to Math Attack!</h1>
                    <p class="para">Select the type of problem you would like to practice.</p>

                  </div>
                </div>



        </div>
      </div>



                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Insert the game here!!</h1>
                        <div className="row">
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>




            </section>
        );
    }
}


module.exports = HomePage;
