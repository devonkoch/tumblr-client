var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');
var TumblrPostsContainer = require('../containers/TumblrPostsContainer');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='tumblr/:blog(/:tag)' component={TumblrPostsContainer} />
      <Route path='tag/:tag' component={TumblrPostsContainer} />
      <Route path='favorites' component={TumblrPostsContainer} />
    </Route>
  </Router>
);

module.exports = routes;