var React = require('react');

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }

        //Binds the 'this' keyword of the updateLanguage function
        //to the context of the Popular object.
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return (
            <ul className='languages'>
                {languages.map(function (lang) { 
                    return (
                        <li key={lang} onClick={this.updateLanguage}>
                            {lang}
                        </li>
                    )
                }, this /*context to be used within the callback function*/)}
            </ul>
        )
    }
}

module.exports = Popular;