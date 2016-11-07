var React = require('react');
var Card = require('./Card');
var TextCard = require('./TextCard');
var PhotoCard = require('./PhotoCard');
var VideoCard = require('./VideoCard');

function Post (props) {
  var type = props.data.type;
  var card = <Card data={props.data} buttonText={props.buttonText} toggleFavorites={props.handleClick}/>;
  if (type === 'text') {
    card = <TextCard data={props.data} buttonText={props.buttonText} toggleFavorites={props.handleClick}/>;
  } else if (type === 'photo') {
    card = <PhotoCard data={props.data} buttonText={props.buttonText} toggleFavorites={props.handleClick}/>;
  } else if (type === 'video') {
    card = <VideoCard data={props.data} buttonText={props.buttonText} toggleFavorites={props.handleClick}/>;
  }

  var styles = {
    margin: '0 auto',
    marginBottom: 20,
    padding: 10,
    maxWidth: 600
  }

  return (
    <div className="card text-xs-center" style={styles}>
      {card}
    </div>
  )
}

module.exports = Post;