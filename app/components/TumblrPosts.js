var React = require('react');
var PropTypes = React.PropTypes;
var PostContainer = require('../containers/PostContainer');

var styles = {
  container: {
    alignItems: 'center',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function TumblrPostsList (props) {
  return (
    <div style={styles.container}>
      {props.tumblrPost.map(function (itemData) {
        return <PostContainer key={itemData.id} data={itemData} buttonText={props.buttonText} handleClick={props.handleClick.bind(null, itemData)} />
      })}
    </div>
  )
}

function TumblrPosts (props) {
  return (
    props.isLoading === true
      ? <h1 style={styles.header}> Loading </h1>
      : <TumblrPostsList
          tumblrPost={props.tumblrPostData}
          buttonText={props.buttonText}
          handleClick={props.handleClick} />
  )
}

module.exports = TumblrPosts;