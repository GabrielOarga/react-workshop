var React = require('react');
var Popular = require('./Popular');
var Test = require('./Test');

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
                <Test text='Cucu'/>
            </div>
        )
    }
}

module.exports = App;