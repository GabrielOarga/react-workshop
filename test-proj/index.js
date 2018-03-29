import React from 'react';
import ReactDOM from 'react-dom';

class CustomDiv extends React.Component {
  render() {
    return( <div>"Hello World"</div> )
  }
}

ReactDOM.render(
  React.createElement(<CustomDiv/>,
  document.getElementById("root"))
);
