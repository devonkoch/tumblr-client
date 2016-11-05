var React = require('react');

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-primary'
      onClick={props.onSubmit}>
      {props.buttonText}
    </button>
  )
}

module.exports = Button;