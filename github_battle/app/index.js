var React  = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var PropTypes = require('prop-types');
const uuidv1 = require('uuid/v1');

class PropTypeTest extends React.Component {
    render() {
        return(
            <h3>This is a test</h3>
        )
    }
}

class Users extends React.Component {
    render() {
        return(
            <ul>
                {this.props.friends
                .filter(function(friend){
                    return friend[0] === 'O' || friend[0] === 'S'
                })
                .map(function(friend){
                    return <li key={uuidv1()}>{friend}</li>
                })}
            </ul>
        )
    }
}

Users.propTypes = {
    friends: PropTypes.array.isRequired
}

PropTypeTest.propTypes = {
    list:PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        donor: PropTypes.bool
    }))
}

class App extends React.Component {
    render() {
        var friends = ["Ovidiu", "Madalina", "Serban"]

        return (
            <div>
                <h2>Friends:</h2>
                <Users friends={friends} />
                <PropTypeTest
                
                    list={[
                        {name: 'Bob', age: 39, donor: true},
                        {name: 'Angel', age: 14, donor: false},
                        {name: 'Ian', age: 63, donor: false},
                        {name: 'Charles', age: 22, donor: true}
                    ]}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
