var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>
);

module.exports = routes;