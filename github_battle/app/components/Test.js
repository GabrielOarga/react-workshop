var React = require('react');

/*
class Test extends React.Component {
  render() {
    return (
      <p>Test Statefull: {this.props.text}</p>
    )
  }
}
*/

function Test (props) {
  return (
    <p>Test Stateless: {props.text}</p>
  )
}

module.exports = Test;