var React = require('react');
var Button = require('./Button');

function TextCard (props) {
  var title = props.data.title;
  var summary = props.data.summary;

  return (
    <div className="card-block">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{summary}</p>
      <Button buttonText={props.buttonText} onSubmit={props.toggleFavorites} />
    </div>
  )
}

module.exports = TextCard;
