var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmit}>
        {props.children}
    </button>
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    alignSelf: 'right'
  }
}

function Form (props) {
  return (
    <div style={getStyles(props)}>
      <input
        style={{margin: 10}}
        className='form-control'
        placeholder={'Blog Name'}
        onChange={props.onBlogUpdate} />
      <input
        style={{margin: 10}}
        className='form-control'
        placeholder={'Tag Name'}
        onChange={props.onTagUpdate} />
      <Button
        onSubmit={props.onSubmit}>
        Submit
      </Button>
    </div>
  )
}

Form.propTypes = {
  direction: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = Form;