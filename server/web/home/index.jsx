'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class HomePage extends React.Component {
    render() {

        const neck = <link rel='stylesheet' href="/public/pages/home.min.css" />;

        return (
            <Layout
                title="Math Attack"
                neck={neck}
                activeTab="home">

                <div className="jumbotron">
                    <h1>Math Attack</h1>
                    <div>
                        <p className="lead">Welcome To Math Attack!</p>
                        <div>
                            <a className="btn btn-primary btn-lg" href="/signup">
                                Create an account
                            </a>
                            &nbsp; or &nbsp;
                            <a className="btn btn-warning btn-lg" href="/login/forgot">
                                Reset your password
                            </a>
                        </div>
                    </div>
                </div>
              
                



                <div className="row">
         <div className="container">
                    
                    <div className="well well-lg">
                    <h2>Donation Summary</h2>
                     <div className="panel-heading">
                     Recent changes to state law force the Board of Education to disclose the details of all donations associated with this project along with a brief explanation of how the donations were used.
                      This report should be available via the public-facing portion of the website.  
                     </div>
                     <div className="panel panel-body">
                    <table className="table">
                    <tr>
                    <th>Donation Amount recieved: </th>
                    <th>Used for: </th>
                    </tr>
                    <tr>
                    <td>$5</td>
                    <td>This donation went to help with school supplies</td>
                    </tr>
                    <tr>
                    <td>$50</td>
                    <td>test</td>
                    </tr>
                    <tr>
                    <td>$20</td>
                    <td>test</td>
                    </tr>

                    </table>
                     </div>

                    </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>About Math Attack</h3>
                                <p>
                                    Click "Learn more" here if you want to know more about us and our site.
                                </p>
                                <a href="/about" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Sign up</h3>
                                <p>
                                    Don't have an account? Not a problem. Sign up here!
                                </p>
                                <a href="/signup" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Donate!</h3>
                                <p>
                                    Here at Group5 we are funded entirely by donations.
                                    So please help us continue doing what we do best.
                                </p>
                                <a href="/donate" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>




                </div>
            </Layout>
        );
    }
}


module.exports = HomePage;
