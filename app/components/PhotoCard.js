var React = require('react');
var Button = require('./Button');


function PhotoCard (props) {
  var title = props.data.summary;
  var summary = props.data.summary;
  var photos = props.data.photos;
  var photo = photos[0].original_size;
  
  var styles = {
    maxWidth: 400
  };

  return (
    <div className="card-block">
      <img className="card-img-top" style={styles} src={photo.url} />
      <p className="card-text">{summary}</p>
      <Button buttonText={props.buttonText} onSubmit={props.toggleFavorites} />
    </div>
  )
}

module.exports = PhotoCard;