var React = require('react');
var FormContainer = require('../containers/FormContainer');

var styles = {
  fontSize: 40,
  color: '#333',
  fontWeight: 100,
  textAlign: 'center',
  marginTop: 50,
  marginBottom: 30
}

function Home (props) {
  return (
    <h1 style={styles}>
      Search Tumblr posts by blog and/or tag name. <br/><br/>
      Then, add a few posts to the favorites tab.
    </h1>
  )
}

module.exports = Home;