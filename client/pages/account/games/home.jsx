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

                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Insert the game here!!</h1>
                        <div className="row">
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
              <div class="row">
              <div class="col-md-12">
               <h3>Solve the Question:</h3>
              <div style="text-align: center;" id="alert" class="alert alert-danger" role="alert">
                 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>

                  </div>

              </div>
              </div>

                   <form name=simpleGame>
                     <div class="form-group">
                     <div class="row">
                    <div class="col-md-8">
                      <input style="margin-bottom: 10px;" type="text" class="form-control" id="question" name="display" disabled>
                          </div>

                          <div class="col-md-4">
                            <input type="button" class="btn btn-default" value="check answer" onClick="ans()">
                          </div>

                          </div>

                         <div style="margin-bottom: 10px;" class="row">
                          <input type="button" class="btn btn-primary" value="1" onclick="simpleGame.display.value+='1'">
                          <input type="button" class="btn btn-primary" value="2" onclick="simpleGame.display.value+='2'">
                          <input type="button" class="btn btn-primary" value="3" onclick="simpleGame.display.value+='3'">
                          <input type="button" class="btn btn-primary" value="4" onclick="simpleGame.display.value+='4'">
                          <input type="button" class="btn btn-primary" value="5" onclick="simpleGame.display.value+='5'">
                          <input type="button" class="btn btn-primary" value="6" onclick="simpleGame.display.value+='6'">
                          <input type="button" class="btn btn-primary" value="7" onclick="simpleGame.display.value+='7'">
                          <input type="button" class="btn btn-primary" value="8" onclick="simpleGame.display.value+='8'">
                          <input type="button" class="btn btn-primary" value="9" onclick="simpleGame.display.value+='9'">
                          <input type="button" class="btn btn-primary" value="0" onclick="simpleGame.display.value+='0'">
                          <input type="button" class="btn btn-primary" value="." onclick="simpleGame.display.value+='.'">
                          <input type="button" class="btn btn-primary" value="-" onclick="simpleGame.display.value+='-'">
                          <input type="reset" name="clear" class="btn btn-primary" value="Clear" onclick="clearForm(this.form);">


                          </div>

                         <div style="margin-bottom: 10px;" class="row">
                          <input type="button" class="btn btn-primary" value="add" onClick="add()">
                          <input type="button" class="btn btn-danger" value="subtract" onClick="subtract()">
                          <input type="button" class="btn btn-success" value="multiply" onClick="multiply()">
                          <input type="button" class="btn btn-default" value="divide" onClick="divide()">
                          </div>

                          <div style="margin-bottom: 10px;" class="row">
                          <label class="custom-control custom-radio">
                          <input class="custom-control-indicator" type="radio" name="arithmetic">Easy
                          </label>

                          <label class="custom-control custom-radio">
                          <input class="custom-control-indicator" type="radio" name="arithmetic" checked>Moderate
                          </label>

                          <label class="custom-control custom-radio">
                          <input class="custom-control-indicator" type="radio" name="arithmetic">Difficult
                          </label>
                          </div>
                          <div style="margin-bottom: 10px;" class="row">
                          <input type="button" class="btn btn-success" value="Check Score" onClick="check()">
                          <input type="button" class="btn btn-success" value="Reset Score" onClick="history.go(0)">
                          </div>

                          </div>
                   </form>
       </div>
        <div class="col-md-2">

        </div>
      </div>




    </div> <!-- /container -->


            </section>
        );
    }
}


module.exports = HomePage;
