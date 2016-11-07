var React = require('react');
var browserHistory = require('react-router').browserHistory;
var FormContainer = require('./FormContainer');

var styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 10
  },
  logo: {
    marginLeft: 20,
    color: 'inherit',
    textDecoration: 'inherit'
  }
}

var Main = React.createClass({  
  goToFavorites: function () {
    browserHistory.push('/favorites');
  },
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.logo}>Tumblr Favorites</h2>
          <button type="button" className="btn btn-warning pull-left" onClick={this.goToFavorites}>Favorites</button>
          <FormContainer />
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;