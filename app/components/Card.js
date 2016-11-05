var React = require('react');
var Button = require('./Button');

function Card (props) {
  var summary = props.data.summary;
  return (
    <div className="card-block">
      <p className="card-text">{summary}</p>
      <Button buttonText={props.buttonText} onSubmit={props.toggleFavorites} />
    </div>
  )
}

module.exports = Card;