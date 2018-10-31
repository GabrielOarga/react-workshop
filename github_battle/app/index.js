var React  = require('react');
var ReactDOM = require('react-dom');
var RTChart = require ('react-rt-chart');
//require('./index.css');

// Separation of concerns, not of technologies

class ListNumbers extends React.Component {
    render() {
        return (
            <ul>
                {this.props.numbers
                .filter(function(number){
                    return number < 100
                })
                .map(function(number){
                    return <li>{number}</li>
                })}
            </ul>
        )
    }
}

class App extends React.Component {
    render() {
        var numbers = [11,21,131];

        return (
            <div>
                <h3>Numbers:</h3>
                <ListNumbers numbers={numbers} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
