var React = require('react');
var Button = require('./Button');

function createMarkup(markup) {
  return {__html: markup};
}

function VideoCard (props) {
  var summary = props.data.summary;
  var videoPlayer = props.data.player[1].embed_code;

  return (
    <div className="card-block">
      <div className="card-img-top" dangerouslySetInnerHTML={createMarkup(videoPlayer)}/>
      <p className="card-text">{summary}</p>
      <Button buttonText={props.buttonText} onSubmit={props.toggleFavorites} />
    </div>
  )
}

module.exports = VideoCard;