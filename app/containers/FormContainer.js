var React = require('react');
var PropTypes = React.PropTypes;
var Form = require('../components/Form');

var FormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  propTypes: {
    direction: PropTypes.string
  },
  getDefaultProps: function () {
    return {
      direction: 'row'
    }
  },
  getInitialState: function () {
    return {
      blog: '',
      tag: ''
    }
  },
  handleSubmit: function (e) {
    e.preventDefault()
    if(this.state.blog && this.state.tag) {
      this.context.router.push('/tumblr/' + this.state.blog + '/' + this.state.tag)
    } else if (this.state.blog) {
      this.context.router.push('/tumblr/' + this.state.blog)
    } else if (this.state.tag) {
      this.context.router.push('/tag/' + this.state.tag)
    }
  },
  handleUpdate: function (propertyName, e) {
    var state = {};
    state[propertyName] = e.target.value;
    this.setState(state);
  },
  render: function () {
    return (
      <Form
        direction={this.props.direction}
        onSubmit={this.handleSubmit}
        onBlogUpdate={this.handleUpdate.bind(this, 'blog')}
        onTagUpdate={this.handleUpdate.bind(this, 'tag')}
        blog={this.state.blog}
        tag={this.state.tag} />
    )
  }
});

module.exports = FormContainer;
