var React  = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// Separation of concerns, not of technologies

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)