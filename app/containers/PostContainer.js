var React = require('react');
var PropTypes = React.PropTypes;
var Post = require('../components/Post');

var PostContainer = React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  },
  render: function() {
    return (
      <Post data={this.props.data} buttonText={this.props.buttonText} handleClick={this.props.handleClick} />
    );
  }
});

module.exports = PostContainer;