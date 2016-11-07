var React = require('react');
var update = require('react-addons-update');
var TumblrPosts = require('../components/TumblrPosts');
var getTumblrPosts = require('../helpers/tumblrApi').getTumblrPosts;

var TumblrPostsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      tumblrPostData: [],
      favoritesPostData: []
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams)
  },
  makeRequest: function (routeParams) {
    getTumblrPosts(routeParams.blog || '', routeParams.tag || '', this.setTumblrData);
  },
  setTumblrData: function (data) {
    this.setState({
      isLoading: false,
      tumblrPostData: data
    });
  },
  addToFavorites: function (data) {
    if(this.state.favoritesPostData.indexOf(data) === -1) {
      this.setState({ 
        favoritesPostData: this.state.favoritesPostData.concat(data)
      });
    }
  },
  removeFromFavorites: function (data) {
    var index = this.state.favoritesPostData.indexOf(data);
    this.setState({
      favoritesPostData: update(this.state.favoritesPostData, {$splice: [[index, 1]]})
    })
  },
  render: function () {
    return (
      this.props.location.pathname === '/favorites'
      ? <TumblrPosts
          isLoading={false}
          handleClick={this.removeFromFavorites}
          buttonText={'Remove'}
          tumblrPostData={this.state.favoritesPostData} />
      : <TumblrPosts
          blog={this.props.routeParams.blog}
          tag={this.props.routeParams.tag}
          isLoading={this.state.isLoading}
          handleClick={this.addToFavorites}
          buttonText={'Add'}
          tumblrPostData={this.state.tumblrPostData} />
    )
  }
});

module.exports = TumblrPostsContainer;
