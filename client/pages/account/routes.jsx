'use strict';
const App = require('./app.jsx');
const Home = require('./home/index.jsx');
const NotFound = require('./not-found.jsx');
const React = require('react');
const ReactRouter = require('react-router');
const Settings = require('./settings/index.jsx');
const Games = require('./games/home.jsx');
const IndexRoute = ReactRouter.IndexRoute;
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;

    const Routes = (
        <Router history={browserHistory}>
            <Route path="/account" component={App}>
                <IndexRoute component={Home} />
                <Route path="/account/settings" component={Settings} />
                <Route path="/account/games" component={Games} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    );

module.exports = Routes;
